/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

//!===============================================================

// const sayHello = (firstname, lastname) => {
//   console.log(`Hello ${firstname} ${lastname}`);
// };

// sayHello('Test1', 'Test2');
// sayHello(10, 20);

//!===============================================================
// function add(a, b, c) {
//   return a + b + c;
// }

// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

// const changeStr = (str1, str2) => (str1 + str2).toUpperCase().slice(1, -1);

// console.log(changeStr('Hello', 'World'));
//!===============================================================

// const foo = (...args) => {
//   console.log(args);
// };

// foo(1, 2, 3, 4, 5, 1, 2);

//!===============================================================

// const changeStr = str => str.toUpperCase().slice(1, -1);

// console.log(changeStr('Hello world'));

//!===============================================================
/**
 * ---------------------------
 */
// function fnA() {
//   return {
//     a: 5,
//   };
// }

// console.log(fnA());

// const arrowFnA = uservalue => ({
//   x: uservalue,
// });

// console.log(arrowFnA(10));
// console.log(arrowFnA('Hello'));

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// calc(2, 3, (x, y) => x + y);
// calc(10, 8, (x, y) => x - y);
