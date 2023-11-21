const os = require("os");
const hello = require("./greeting");
const Person = require("./person");

const ivan = new Person("Иван", 26);

const userName = hello.getGreeting(ivan.name);
let systemName = os.type();
console.log(
  `${userName}. Вы используете ${systemName}. Ваш возраст: ${ivan.age}`
);
