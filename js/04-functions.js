/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// ===============================================

// function sayHello() {
//   console.log('Start');
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   console.log(4);
//   console.log(5);
//   console.log(6);
//   console.log(7);
//   console.log('End');
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();

// function sayHello() {
//   console.log('Hello world');
// }

// ===============================================

/* function sum(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  const result = x + y;
  return result;
}

const t1 = sum(2, 3);
const t2 = sum(-3, 3);

console.log(t1 + t2); */

// function foo() {}

// console.log(foo());

// ===============================================

// const x = 10;
// const y = 20;

// function foo1() {
//   const t1 = 10;
//   t3 = 1;
// }

// function foo2() {
//   const t1 = 10;
//   const t3 = 10;
// }

// foo1();
// ===============================================

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

const bmi1 = calcBMI('88,3', '1.75');
const bmi2 = calcBMI('88,3', '1.75');
const bmi3 = calcBMI('88,3', '1.75');
const bmi4 = calcBMI('88,3', '1.75');
console.log(bmi1); // 28.8

function calcBMI(weight, height) {
  weight = +weight.replace(',', '.');
  height = +height.replace(',', '.');
  const result = weight / height ** 2;
  return +result.toFixed(1);
}
