import { Guest } from '../index';

export default function validateGuest(guest: Partial<Guest>): string[] {
    const errors: string[] = [];
    const { name, email } = guest;

    if (!name) {
        errors.push('Nome é obrigatório');
    }

    if (!email) {
        errors.push('E-mail é obrigatório');
    }

    return errors;
}
