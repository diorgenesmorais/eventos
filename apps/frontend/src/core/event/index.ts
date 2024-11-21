import Event from './model/Event';
import Guest from './model/Guest';
import validateEvent from './functions/validateEvent';
import completeEvent from './functions/completeEvent';
import createEmptyEvent from './functions/createEmptyEvent';
import createEmptyGuest from './functions/createEmptyGuest';
import validateGuest from './functions/validateGuest';

export type { Event, Guest }
export {
    validateEvent,
    completeEvent,
    createEmptyEvent,
    createEmptyGuest,
    validateGuest
}
