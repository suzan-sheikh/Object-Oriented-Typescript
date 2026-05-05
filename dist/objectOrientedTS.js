"use strict";
//* Class and Object
Object.defineProperty(exports, "__esModule", { value: true });
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
classToObject.makeSound();
//* use Parameter Properties
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} and ${this.sound}`);
    }
}
const classToObject = new Animal("DOG", "BD dog", "Special");
classToObject.makeSound();
//# sourceMappingURL=objectOrientedTS.js.map