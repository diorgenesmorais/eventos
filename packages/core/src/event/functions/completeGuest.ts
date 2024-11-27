import { Guest, validateGuest } from '../index';
import { Id } from '../../shared';

export default function completeGuest(guestPartial: Partial<Guest>): Guest {
    const errors = validateGuest(guestPartial);

    if (errors.length) {
        throw new Error(errors.join('\n'));
    }

    const { hasCompanion, confirmed, numberOfCompanions } = guestPartial;
    const isAccompanied = Boolean(hasCompanion && confirmed && numberOfCompanions);

    return {
        id: guestPartial.id ?? Id.get(),
        ...guestPartial,
        confirmed: Boolean(confirmed),
        numberOfCompanions: isAccompanied ? numberOfCompanions : 0,
        hasCompanion: isAccompanied
    } as Guest;
}
