"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myVariable = "new";
myVariable.toString();
// NOTE: Numbers
var myNum = 1.32; // ITS TOO OBVIOUS, : type is way too redundant.
myNum.toString();
// NOTE: Better way is just SIMPLE-
var numBetterWay = 1.412; // its will be treated as num directly, TS is smart
// NOTE: boolean
var something = true;
// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
// When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:
// let hero; // Because TS can't know which  value hero is going to assign so it assign it ANY, which is a bad prac.
var hero;
function checkList() {
    return "Thro";
}
hero = checkList();
// NOTE: Function - // Bug in case of func :type is a good idea
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("barmanji");
function singUp(email, avatar, password) { }
singUp("abc@abc.com", true, "abfai2"); // But what about default values? lets say i want avatar false as default
var singUpUser = function (email, password, avatar) {
    if (avatar === void 0) { avatar = false; }
}; // HACK:  Default param should always comes in the end else it will give you nightmares
singUpUser("abc@abc.com", "123abc");
