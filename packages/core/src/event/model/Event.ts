import IGuest from "./Guest";

export default interface IEvent {
    id: string;
    identifier: string;
    password: string;
    name: string;
    date: Date;
    local: string;
    description: string;
    image: string;
    backgroundImage: string;
    expectedAudience: number;
    guests: IGuest[];
}