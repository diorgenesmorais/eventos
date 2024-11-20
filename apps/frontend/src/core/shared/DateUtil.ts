
export default class DateUtil {
    /**
     * @returns the date in international standard yyyy-MM-ddTHH:mm e.g: 2024-10-11T16:22
     */
    static format(date: Date = new Date()): string {
        const pad = (n: number) => n.toString().padStart(2, '0');

        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1);
        const day = pad(date.getDate());
        const hour = pad(date.getHours());
        const minute = pad(date.getMinutes());

        return `${year}-${month}-${day}T${hour}:${minute}`;
    }

    /**
     * @param date in string (yyyy-MM-ddTHH:mm - 2024-10-11T16:22)
     * @returns a date object
     */
    static unformat(date: string): Date {
        const [year, mount, day, hour, minute] = date.split(/[-T:]/).map(Number);

        return new Date(year, mount - 1, day, hour, minute);
    }
}
