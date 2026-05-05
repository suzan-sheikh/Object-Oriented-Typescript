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
//     console.log(`${this.name} is making sound ${this.sound}`);
//   }
// }

// const dog = new Animal("dogesh bhai", "god", "ghew thew");
// const cat = new Animal("cat for all", "cat", "mew mew");

// dog.makeSound();
// cat.makeSound();

class Animal {
  name: string;
  species: string;
  sound: string;
  constructor(nam: string, doron: string, sabdo: string) {
    this.name = nam;
    this.species = doron;
    this.sound = sabdo;
  }

  makeSound() {
    console.log(`${this.name} is making sound ${this.sound}`);
  }
}

const dog = new Animal("DOG", "dog", "special");

dog.makeSound();
