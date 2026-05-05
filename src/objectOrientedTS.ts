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

//* in guard

type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  roll: string;
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("roll" in user) {
    console.log(`this user name is ${user.name} and Roll is ${user.roll}`);
  } else {
    console.log(`Only name is ${user.name}`);
  }
};

// getUserInfo({ name: "suzan", roll: "2" });

//* Instance guard

class Per {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(sleepTime: number) {
    console.log(`${this.name} is sleep ${sleepTime}`);
  }
}
class Stu extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(studyHours: number) {
    console.log(`${this.name} is study ${studyHours}`);
  }
}

class Teacher extends Per {
  constructor(name: string) {
    super(name);
  }
  doTeaching(teachingTime: number) {
    console.log(`${this.name} is Teachin Time is ${teachingTime}`);
  }
}

const currentUserInfo = (user: Per) => {
  if (user instanceof Stu) {
    user.doStudy(10);
  } else if (user instanceof Teacher) {
    user.doTeaching(5);
  } else {
    user.getSleep(20);
  }
};

const newStu = new Stu("Mr Suzan");
const teacher = new Teacher("Mr Arif");
const normalPer = new Per("manus");

currentUserInfo(normalPer)
