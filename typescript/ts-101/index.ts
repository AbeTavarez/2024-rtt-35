import { Learner, Car, User, ElectricCar } from "./types";
// strings
const learnerName: string = "Bill";

const lasName: string = "Gates";

// number
let age: number = 28;

// booleans
let authenticated: boolean = true;

// arrays
const favNumbers: number[] = [1, 2, 3];
const languages: string[] = ["JS", "TS", "C#", "Python"];

favNumbers.push(11);
favNumbers.push(33);

languages.push("R");
languages.push("C++");

const colorsArray: Array<{ colorName: string }> = [];

colorsArray.push({ colorName: "green" });

// objects
const company: { name: string; value: number } = {
  name: "Microsoft",
  value: 30000000,
};

const john: Learner = {
  name: "john",
  age: 20,
  isAdult: true,
};

const mary: Learner = {
  name: "Mary",
  isAdult: true,
  age: 18
};

const user1 = {
  name: "Mary",
  isAdult: true,
};

function printInfo(value: Learner) {
    console.log(value.name, value.isAdult );
}

printInfo(user1);


const dreamCar: Car = {brand: 'Tesla', model: 'Y', price: 50000}



const ourTuple: [number, boolean, string] = [11, true, 'tuple'];

let otherTuple: readonly [boolean, number, string];

otherTuple = [false, 44, 'hello']
console.log(otherTuple)

// Tuples
function compute(): [number, number] {
    let x = 1
    let y = 3
    return [x, y]
}

const [x, y] = compute();

console.log(x);
console.log(y);


// Types

type Course = {
    name: string,
    date: Date,
}

type someType = string;


const tsCourse: Course = {
    name: 'TS100',
    date: new Date()
}



