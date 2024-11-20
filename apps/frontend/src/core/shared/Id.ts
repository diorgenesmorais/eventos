
export default class Id {
    static getUUID(): string {
        return crypto.randomUUID();
    }

    private static hash(): string {
        return Math.random().toString(36).substring(2, 15);
    }

    static get(): string {
        return `${this.hash()}-${this.hash()}-${this.hash()}`;
    }
}
