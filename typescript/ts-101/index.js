"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// strings
var learnerName = "Bill";
var lasName = "Gates";
// number
var age = 28;
// booleans
var authenticated = true;
// arrays
var favNumbers = [1, 2, 3];
var languages = ["JS", "TS", "C#", "Python"];
favNumbers.push(11);
favNumbers.push(33);
languages.push("R");
languages.push("C++");
var colorsArray = [];
colorsArray.push({ colorName: "green" });
// objects
var company = {
    name: "Microsoft",
    value: 30000000,
};
var john = {
    name: "john",
    age: 20,
    isAdult: true,
};
var mary = {
    name: "Mary",
    isAdult: true,
    age: 18
};
var user1 = {
    name: "Mary",
    isAdult: true,
};
function printInfo(value) {
    console.log(value.name, value.isAdult);
}
printInfo(user1);
var dreamCar = { brand: 'Tesla', model: 'Y', price: 50000 };
var ourTuple = [11, true, 'tuple'];
var otherTuple;
otherTuple = [false, 44, 'hello'];
console.log(otherTuple);
