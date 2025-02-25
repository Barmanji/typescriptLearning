class User {
    // BETTER WAY
    protected kitty: string = "meow"
    private city: string = "jaipur";
    constructor(
        public email: string,
        public name: string,
    ) {}

    // getter & setter
    get getAppleEmail(): string {
        return `email: ${this.email}`;
    }
    // set ----,,,
}

class SubUser extends User{
    kitty: string = "pussy" // city cant be redifine as its a private NOTE: thats why we have PROTECTED, which is private for other varaible outside the scope but we can use in other classes
    // Acquires all property except Private ones
}

// class User {
//     email: string; // Ts has to know beforehand that these value will come up
//     name: string; // all the other will be marked at NOTE: public automatically
//     private city: string = "jaipur"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//
// }

const barmanji = new User("abc@abc.com", "Abc");
