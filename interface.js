"use strict";
// type User = []
Object.defineProperty(exports, "__esModule", { value: true });
var Seat;
(function (Seat) {
    Seat[Seat["AISLE"] = 10] = "AISLE";
    Seat[Seat["MIDDLE"] = 11] = "MIDDLE";
    Seat[Seat["WINDOW"] = 12] = "WINDOW";
})(Seat || (Seat = {}));
var mySeat = Seat.AISLE;
var barmanji = {
    dbId: 214,
    role: "admin",
    github: 'a',
    email: "abc",
    userId: "abc",
    startTrial: function () {
        return "abc";
    },
};
