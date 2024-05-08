/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */

//!===============================================================

/* const objA = {
  name: 'ObjA',
  x: 10,
  y: 20,
};

const objB = Object.create(objA);
objB.name = 'ObjB';

console.log(objB.u); */
//!===============================================================

const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = 'Mango';

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty('name'));
// console.log(dog.hasOwnProperty('legs'));

// for (const key in dog) {
//   console.log(key, dog.hasOwnProperty(key));
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

//!===============================================================

// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty('a'));
// console.log(objA.a);

// console.log(objA.hasOwnProperty('b'));
// console.log(objA.b);

// console.log(objA.hasOwnProperty('c'));
// console.log(objA.c);

// console.log(objA.hasOwnProperty('x'));
// console.log(objA.x);

//!===============================================================

const dogPrototype = {
  sayWoof() {
    console.log('Woof');
  },
  eat() {
    console.log('Ням ням');
  },
  sleep() {
    console.log('Zxxxzz');
  },
  sayHello() {
    console.log(this.name);
  },
};

function createDog(name) {
  const dog = Object.create(dogPrototype);
  dog.name = name;
  return dog;
}

const dog1 = createDog('Lord');
const dog2 = createDog('Knopka');
const dog3 = createDog('Mars');
const dog4 = createDog('Axe');

dog2.sayHello();
