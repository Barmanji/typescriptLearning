let myVariable: string = "new";
myVariable.toString()

// NOTE: Numbers
let myNum: number = 1.32; // ITS TOO OBVIOUS, : type is way too redundant.
myNum.toString()

// NOTE: Better way is just SIMPLE-
let numBetterWay = 1.412; // its will be treated as num directly, TS is smart

// NOTE: boolean
let something: boolean = true;

// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
// When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:
// let hero; // Because TS can't know which  value hero is going to assign so it assign it ANY, which is a bad prac.

let hero: string;
function checkList(){
    return "Thro"
}

hero = checkList()

// NOTE: Function - // Bug in case of func :type is a good idea
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("barmanji")

function singUp(email: string, avatar: boolean, password: string){}
singUp("abc@abc.com",true,"abfai2") // But what about default values? lets say i want avatar false as default

let singUpUser = (email: string, password: string ,avatar: boolean = false) => {} // HACK:  Default param should always comes in the end else it will give you nightmares
singUpUser("abc@abc.com","123abc")

// Returning More than one types
function getValue(myVal: number){
    if (myVal > 5) {
       return true
    }
    return "OK"
}
getValue(2)
// o/p or the scope of func will onlny contain nums
// function getFavoriteNumber(): number {
//   return 26;
// }

// can be done like this as well
// function getFavoriteNumber(): Promise<number> {
//     return Promise.resolve(10)
// }

// async function getFavoriteNumber(): Promise<number> {
//   return 26;
// }

export {};


