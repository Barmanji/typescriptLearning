class User { // BETTER WAY
    private city: string = "jaipur"
    constructor(public email: string, public name: string) {
    }
}

// class User {
//     email: string; // Ts has to know beforehand that these value will come up
//     name: string; // all the other will be marked at NOTE: public automatically
//     private city: string = "jaipur"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

const barmanji = new User("abc@abc.com", "Abc");
