//* Class and Object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(`${this.name} and ${this.sound}`);
//   }
// }

// const classToObject = new Animal("DOG", "BD dog", "Special");

// classToObject.makeSound();

//* use Parameter Properties

// class Animal {
//   constructor(
//     public name: string,
//     public species: string,
//     public sound: string,
//   ) {}
//   makeSound() {
//     console.log(`${this.name} and ${this.sound}`);
//   }
// }

// const classToObject = new Animal("DOG", "BD dog", "Special");

// classToObject.makeSound();

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  normalPerson() {
    console.log(`normal name is ${this.name}`);
  }
}

class Student extends Person {
  roll: string;
  constructor(name: string, roll: string) {
    super(name);
    this.roll = roll;
  }
  studyPerson() {
    console.log(`student name is ${this.name} and ${this.roll} `);
  }
}

const firstClass = new Person("suzan");
const SecondClass = new Student("suzan", "22");

// SecondClass.studyPerson()
//* type gard

type NewType = string | number;


const add = (num1: NewType, num2: NewType) =>
  typeof num1 === "number" && typeof num2 === "number"
    ? num1 + num2
    : num1.toLocaleString() + num2.toString();

// console.log(add(10, 10));



