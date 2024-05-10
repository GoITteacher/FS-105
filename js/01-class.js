/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

//!===============================================================

/* class User {
  constructor(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
  }

  showInfo() {
    const info = `Name: ${this.name}
Age: ${this.age}`;

    console.log(info);
  }

  showName() {
    console.log('Name:', this.name);
  }

  setAge(newValue) {
    this.age = newValue;
  }
} */

// const user1 = new User('Vlad', 25, 'Lviv', 'Ukraine');

//!===============================================================

/* class Dog {
  constructor(name, age, breed, color) {
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.breed = breed;
    this.color = color;
  }

  sayWoof() {
    console.log('Woof woof');
  }

  sayName() {
    console.log('Name', this.name);
  }
}

const dog1 = new Dog('Lana', 5, 'spaniel', 'gold');
dog1.sayWoof();
dog1.sayName();

console.log(dog1); */
//!===============================================================
/* 
class Dog {
  #legs = 4;
  #breed;
  #age;

  constructor(name, age, breed, color) {
    this.name = name;
    this.#age = age;
    this.#breed = breed;
    this.color = color;
  }

  getBreed() {
    return this.#breed;
  }
  getLegs() {
    return this.#legs;
  }
  getAge() {
    return this.#age;
  }

  setAge(newValue) {
    if (newValue > this.#age && newValue < 100) {
      this.#age = newValue;
    } else {
      console.log('Error');
    }
  }
}

const dog1 = new Dog('Lana', 5, 'spaniel', 'gold');

dog1.name = 'Lord';

dog1.setName('Lord') */
//!===============================================================
/* 
class Dog {
  #legs = 4;
  #breed;
  #age;

  constructor(name, age, breed, color) {
    this.name = name;
    this.#age = age;
    this.#breed = breed;
    this.color = color;
  }

  get legs() {
    return this.#legs;
  }

  get breed() {
    return this.#breed;
  }

  get age() {
    return this.#age;
  }

  set age(newValue) {
    if (newValue > this.#age) {
      this.#age = newValue;
    } else {
      console.log(`Age must be more than ${this.#age}`);
    }
  }

  get info() {
    return `${this.name} ${this.#breed} ${this.color} ${this.#age}`;
  }
}

const dog1 = new Dog('Lana', 5, 'spaniel', 'gold');
 */
// console.log(dog1.info);

// dog1.setAge();

//!===============================================================

/* class Calc {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  sum() {
    const result = `${this.#getStr()}\nx+y=${this.x + this.y}`;
    return result;
  }

  #getStr() {
    return `x:${this.x};\ny:${this.y};`;
  }
}

const calc1 = new Calc(10, 20);

console.log(calc1.sum()); */

//!===============================================================

/* class User {
  constructor(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
  }

  toString() {
    let result = '';

    result += this.#getName() + '\n';
    result += this.#getAge() + '\n';
    result += this.#getLocation() + '\n';

    return result;
  }

  #getName() {
    return `Name: ${this.name}`;
  }
  #getAge() {
    return `Age: ${this.age}`;
  }
  #getLocation() {
    return `Location:\n- city ${this.city}\n- country ${this.country}`;
  }
}

const user = new User('Vlad', 20, 'Lviv', 'Ukraine');

console.log(user.toString());
 */

//!===============================================================

/* class Tesla {
  static discount = 0.05;

  constructor(model, price, color) {
    this.model = model;
    this.price = price;
    this.color = color;
  }

  showPrice() {
    console.log('Price:', this.price);
    console.log('With discount:', this.price * (1 - Tesla.discount));
  }
}

const car1 = new Tesla('model S', 30000, 'white');
const car2 = new Tesla('model S', 35000, 'white'); */

//!===============================================================

// class Task {
//   static #counter = 0;

//   constructor(title, description, deadline) {
//     console.log('Task.#counter += 1;');
//     this.title = title;
//     this.description = description;
//     this.deadline = deadline;

//     Task.#counter += 1;
//   }

//   get counter() {
//     return Task.#counter;
//   }
// }

// const task1 = new Task('Title1', 'Desc1', 1);
// const task2 = new Task('Title2', 'Desc2', 2);
// const task3 = new Task('Title3', 'Desc3', 3);

// console.log(Task.counter);
