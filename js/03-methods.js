/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */
//!===============================================================

// const user1 = {
//   name: 'Vasya',
// };
// const user2 = {
//   name: 'Petya',
// };
// const user3 = {
//   name: 'Kolya',
// };

// function showName(r, g, b) {
//   console.log(this.name, (r + g + b) / 3);
// }

// const red = 212;
// const green = 12;
// const blue = 35;
// showName.call(user1, red, green, blue);

// const rgb = [212, 12, 45];
// showName.apply(user1, rgb);

//!===============================================================

// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };

// changeColor.call(sweater, 'Red');
// changeColor.call(hat, 'white');
// console.log(hat);

//!===============================================================

// function foo(a, b, c, d) {
//   console.log(this, a, b, c, d);
// }

// const user = {
//   name: 'Volodka',
// };

// const copy2 = foo.bind(user, 10, 20);

/* 
11 arrow
9 bind
7 call apply
5 object
3 window | undefined
*/

//!===============================================================

// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

/**
 * -------------------------------
 */

//!===============================================================

/* 
Замикання - це можливість функції зберегти навколишнє оточення (за потреби)
*/

// function foo() {
//   const value = 10;

//   function test() {
//     console.log(value);
//   }

//   const x = test;

//   return x;
// }

// const result = foo();

// result();

//!===============================================================

// function getCalc(firstName) {
//   const x = 10;

//   function calc(a, b) {
//     console.log(firstName, a + b + x);
//   }

//   return calc;
// }

// const calc1 = getCalc('Volodka');
// const calc2 = getCalc('Anton');
// const calc3 = getCalc('Max');

// calc2(10, 20);

//!===============================================================

// function getCounter() {
//   let x = 0;

//   function increment() {
//     console.log(x++);
//   }

//   return increment;
// }

// const firstIncrement = getCounter();
// const secondIncrement = getCounter();

// firstIncrement();
// firstIncrement();
// firstIncrement();
// firstIncrement();
// firstIncrement();

// secondIncrement();
// secondIncrement();
// secondIncrement();
// secondIncrement();

//!===============================================================

/* 
1. Який тип функції
- якщо звичайна - дивимось момент виклику
- якщо стрілчата - дивимось визначаємо контекст батьківської фн-ї
*/

// function foo() {
//   const arrow = () => {
//     console.log(this);
//   };

//   arrow();
// }

// foo.call({ name: 'vasya' });

// const arrow = () => {
//   console.log(this);
// };

// arrow();
