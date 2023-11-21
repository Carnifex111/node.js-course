class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
  }

  sayHi() {
    console.log(`Привет, меня зовут ${this.name}`);
  }
}

module.exports = Person;
