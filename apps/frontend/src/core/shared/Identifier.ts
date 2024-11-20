
export default class Identifier {
    /**
     * format the entered text, converting spaces to hyphens and returning to lower case
     * 
     * @param value a text to format
     * @returns the text formatted and everything in lower case
     */
    static format(value: string): string {
        return value.replace(/ /g, '-').toLowerCase();
    }
}
