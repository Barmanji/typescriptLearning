const User = {
    name: "Ajay",
    email: "barmanjiaj@gmail.com",
    isActive: true,
};

function createUser({ name: string, email: boolean }) {}
createUser({ name: "Ajay", email: true });
let newUser = { name: "Ajay", email: true, dmail: "abc" };
createUser(newUser);
// createUser({ name: "Ajay", email: true, dmail: "abc" }) this is not allowed but above is. WOW

// Little confusing but its the right way
function createCourse(): { name: string; email: string } {
    return { name: "Ajay", email: "ab@ab.com" };
}

// NOTE: TYPE Alias-
type User = {
    name: string;
    email: string;
    isActive: boolean;
};

function createBUser(user: User): User {
    return { name: "", email: "", isActive: true };
}

createBUser({ name: "", email: "", isActive: true });

// NOTE: ReadOnly
type newUser = {
    readonly _id: string // Best Ex is MongoDb _id, If its an array readonly then it would push value if changing liek abc._id = "abc"
    name: string
    email?: string
}

let myUser: newUser = {
    _id: '131441',
    name: 'abc',
    email: 'ac'
}

type cardNum = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

// Combining both, cool way
type cardDetail = cardNum & cardDate & {
    cvv: number
}
export {};
