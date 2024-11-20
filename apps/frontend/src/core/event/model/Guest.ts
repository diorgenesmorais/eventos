
export default interface IGuest {
    id: string;
    name: string;
    email: string;
    confirmed: boolean;
    hasCompanion: boolean;
    numberOfCompanions: number;
}