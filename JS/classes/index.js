const person = {
  name: {
    first: "Elyan",
    last: "Kemble",
  },
  age: 32,
  location: {
    city: "Garland",
    state: "Texas",
    zip: 75040,
  },
  occupation: "Front-End Developer",
  introduce() {
    console.log(
      `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`,
    );
  },
};

// Class definition
class Animal {
  static cute = true;
  static PI = 3.1999999;

  constructor(eyes, legs, isAwake, isMoving) {
    this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
  }

  sleep() {
    this.isAwake = false;
  }

  wake() {
    this.isAwake = true;
  }

  sit() {
    this.isMoving = false;
  }

  walk() {
    this.isMoving = true;
  }

  static speak(sound) {
    console.log(sound);
  }

  toString(animal = "Animal") {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${
      this.isAwake ? "is" : "is not"
    } awake, and ${this.isMoving ? "is" : "is not"} moving.`;
  }
}
// console.log(Animal);

Animal.speak("zzzzz...");
console.log(Animal.cute);
console.log(Animal.PI);

const cat1 = new Animal(2, 4, true, false);
const cat2 = new Animal(2, 4, false, false);
const cat3 = new Animal(2, 4, true, true);

cat1.eyes = "red";
console.log("CAT 1 ===", cat1);

console.log(cat2);
console.log(cat3);

// Array of cats
const catBox = [];

// array static method
console.log(Array.isArray(catBox));

// for (let i = 0; i <= 100; i++) {
//   const cat = new Animal(2, 4, true, false);
//   catBox.push(cat);
// }

for (let i = 0; i <= 10; i++) {
  const cat = new Animal(2, 4, true, true);
  catBox.push(cat);
}

console.table(catBox);

// static method
console.log(Math.random());

// instance method
cat1.sleep();
console.log(cat1);

cat2.wake();
cat2.walk();
console.log(cat2);
// cat3.speak("meoww");

console.log(cat1.toString());
console.log(false.toString());
console.log(cat2.toString());

// Cat child class
class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving); // calls the Animal constructor function
    this.fur = fur;
  }

   static speak() {
    super.speak("Meow...");
  }

  toString() {
    return super.toString("Cat");
  }
}

// Animal.speak("zzzzzz");

// Cat.speak();

const testCat = new Cat("yellow", true, true);
console.log(testCat);
// testCat.speak();
console.log(testCat.toString());

const smallCat = new Cat("black", false, false);
console.log(smallCat);
console.log(smallCat instanceof Cat); // true
console.log(smallCat instanceof Animal); //true

const tom = new Animal(2, 4, true, true);
console.log(tom);
console.log(tom instanceof Animal); // true
console.log(tom instanceof Cat); // false


