/**
 * Арифметичні операції
 * - Оператори +, -, *, /, %, **
 * - Комбіновані оператори
 */

/* const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(2 ** 3);
console.log(10 % 3);

const result = 10 * 2 - (10 / 4) * 1; */
// ===========================

// 10 % 3 = 10 - (3 * 3) = 1;
// 11 % 3 = 11 - (3 * 3) = 2;
// 12 % 3 = 12 - (3 * 4) = 0;
// 13 % 3 = 13 - (3 * 4) = 1;

// ===========================

/**
 * Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

const apples = 47;
const grapes = 135;

const result1 = apples + grapes;
const result2 = apples - grapes;

// console.log('Результат:', result1);
// console.log('Результат:', result2);

/**
 * Заміни вираз перевизначення комбінованим оператором
 */

let students = 100;
students = students + 50;

students += 50;
students = students - 20;
students = students + 20;
students -= 20;
students /= 20;
students *= 20;
students **= 20;
students %= 20;

/**
 * Розбери пріоритет операторів в інструкції привласнення значення змінної result
 */

const result = 108 + 223 - 2 * 5;
// console.log(result);
