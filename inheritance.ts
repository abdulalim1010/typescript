class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name); // parent constructor call
    this.age = age;
  }

  showAge() {
    console.log("Age: " + this.age);
  }
}