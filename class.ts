class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  
  }
    makeSound(){
      console.log(`the animal make sound`);
    }
}
const dog = new Animal("mithu", "Ghew", "dog")
console.log(dog.name)
const cat = new Animal("cat ","cattu","laltu")
cat.makeSound()

