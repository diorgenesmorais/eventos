import { Event } from '../index';

export default function validateEvent(event: Partial<Event>): string[] {
    const errors: string[] = [];
    const { identifier, name, description, date, local, expectedAudience } = event;

    if (!identifier) {
        errors.push('Alias é obrigatório');
    }

    if (!name) {
        errors.push('Nome é obrigatório');
    }

    if (!description) {
        errors.push('Descrição é obrigatória');
    }

    if (!date) {
        errors.push('Data é obrigatória');
    }

    if (!local) {
        errors.push('Local é obrigatório');
    }

    if (!expectedAudience || expectedAudience < 1) {
        errors.push('Público esperado é obrigatório');
    }

    return errors;
}
