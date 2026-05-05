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

class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}
  makeSound() {
    console.log(`${this.name} and ${this.sound}`);
  }
}

const classToObject = new Animal("DOG", "BD dog", "Special");

classToObject.makeSound();
