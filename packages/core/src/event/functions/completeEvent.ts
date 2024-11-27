import { Event, validateEvent } from '../index';
import { Id, Password } from '../../shared';

export default function completeEvent(eventPartial: Partial<Event>): Event {
    const errors = validateEvent(eventPartial);

    if (errors.length) {
        throw new Error(errors.join('\n'));
    }

    const event: Event = {
        ...eventPartial,
        id: eventPartial.id ?? Id.get(),
        password: eventPartial.password ?? Password.create(20),
        expectedAudience: Number(eventPartial.expectedAudience ?? 1),
        date: eventPartial.date ?? new Date()
    } as Event;

    return event;
}