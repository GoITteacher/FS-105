/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

//!===============================================================

// function foo1() {
//   console.log(arguments);
//   console.log(this);
// }

// foo1(1, 2, 3, 4);
//!===============================================================
/**
 * Глобальний контекст 
//? UNDEFINED
 */

// function foo() {
//   console.log('foo -> this', this);
// }

// foo();

// function foo1() {
//   console.log(this);
// }

// foo1();
//!===============================================================

/**
 * Контекст методу об'єкта
 */

// const cat1 = {
//   name: 'Marsik',
//   sayHello() {
//     console.log(cat1.name);
//   },
// };

// const cat2 = {
//   name: 'Barsik',
//   sayHello() {
//     console.log(cat2.name);
//   },
// };

// const cat3 = {
//   name: 'Tarsik',
//   sayHello() {
//     console.log(this.name);
//   },
// };

// cat2.sayHello();
//!===============================================================

/**
 * Контекст методу об'єкта, но объявлена как внешняя функция.
 */

/* function showTag() {
  console.log(this);
}

const mango = {
  tag: 'Mango',
  test: showTag,
};

mango.test(); */

// ===============

/* function showName() {
  console.log(this.name);
}

const dog1 = {
  name: 'Lord1',
  test: showName,
};

const dog2 = {
  name: 'Lord2',
  test: showName,
};

const dog3 = {
  name: 'Lord3',
  test: showName,
};

const dog4 = {
  name: 'Lord4',
  test: showName,
};

dog2.test(); */
//!===============================================================

/**
 * Вызов без контекста, но объявлена как метод объекта.
 */

// const poly = {
//   tag: 'Poly',
//   showTag() {
//     console.log(this);
//   },
// };

// const copy = poly.showTag;

// copy();

//!===============================================================

/**
 * Контекст в callback-функциях
 */

// function foo1(callback) {
//   const user = {
//     name: 'Vasya',
//     test: callback,
//   };

//   user.test();
// }

// function foo2() {
//   console.log(this);
// }

// foo1(foo2);

//!===============================================================
