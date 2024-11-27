import { Id } from '../../shared';
import { Event } from '../index';

export default function createEmptyEvent(): Partial<Event> {

    return {
        id: Id.get(),
        name: '',
        description: '',
        date: new Date(),
        local: '',
        expectedAudience: 1,
        image: '',
        backgroundImage: ''
    }
}
