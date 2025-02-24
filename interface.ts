// type User = []

const enum Seat { // gives so much uncessary shit use const before tahts why
    AISLE = 10,
    MIDDLE,
    WINDOW
}
const mySeat = Seat.AISLE
// Interface is a psudo or very far fetched CLASS

interface User {
    readonly dbId: number;
    email: string;
    userId: string;
    picoloID?: string;
    // startTrial: () => string -> we can define a method as well
    startTrial(): string;
}
interface User { // reopning of interface
    github: string
}

interface Admin extends User {
    role: "admin" // all value of User comes in Admin now
}
const barmanji: Admin = {
    dbId: 214,
    role: "admin",
    github: 'a',
    email: "abc",
    userId: "abc",
    startTrial: () => {
        return "abc";
    },
};
// const barmanji: User = {
//     dbId: 214,
//     github: 'a',
//     email: "abc",
//     userId: "abc",
//     startTrial: () => {
//         return "abc";
//     },
// };

export {};
