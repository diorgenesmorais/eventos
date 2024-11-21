import { Id } from "../../shared";
import { Guest } from "..";

export default function createEmptyGuest(): Partial<Guest> {
    return {
        id: Id.get(),
        name: '',
        email: '',
        confirmed: true,
        hasCompanion: false,
        numberOfCompanions: 0
    }
}
