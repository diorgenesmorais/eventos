
export default class Password {
    static create(length: number = 8): string {
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const symbols = "!@#$%&*";
        const allChars = lowerCase + upperCase + numbers + symbols;

        let password = "";

        password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
        password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));

        for (let i = password.length; i < length; i++) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        password = password.split('').sort(() => Math.random() - 0.5).join('');

        return password;
    }
}
