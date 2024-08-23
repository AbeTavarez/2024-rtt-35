class Learner {
  // Private Properties
  #grades = [];

  #name = {
    first: "",
    last: "",
  };

  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }

  // Returns the full-name
  get name() {
    return `${this.#name.first} ${this.#name.last}`;
  }

  get age() {
    return this.#age;
  }

  get grades() {
    return this.#grades;
  }

  get average() {
    const arr = [...this.#grades]; // makes a copy of the #grades
    arr.sort((a, b) => a - b).shift(); // sort lower to higher and will remove the first element in the sorted array

    // add all grades, divides them by the length of the array
    return arr.reduce((a, b) => a + b) / arr.length;
  }

  set grades(grade) {
    grade = Number(grade);

    if (grade >= 0 && grade <= 100) {
      this.#grades.push(grade);
    }
  }

  addGrades(...grades) {
    // fatten the array
    grades = grades.flat();

    // loop over and access each grade
    grades.forEach((grade) => {
      // if (typeof grade === 'string') {
      //     throw new Error("Grade need to be a number");

      // }

      // convert the grade to a number
      grade = Number(grade);

      // checks that we stay in the 0 to 100 ranger
      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade); // push grade to the #grades
      }
    });
  }
}

const max = new Learner("Max", "Pain", 30);

// max.age = 'Four';

console.log(max.name);
console.log(max.age);

// calling the grades setter
max.grades = 80;
max.grades = 100;
max.grades = 70;

// getting the array of grades
console.table(max.grades);

max.addGrades(["50", "40", 30, -60], [66, 33, 88, -100], [77, 84, 98]);

console.log(max.average.toFixed(0));

console.log(max instanceof Learner);
console.log(max instanceof Object);
console.log(max);

// ========================================
// Grades

class Grades {
  static getAverage(...grades) {
    const arr = [];

    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        arr.push(grade);
      }
    });

    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
}

console.log(Grades.getAverage(99, 67, 55, [77, 89, 45]));
