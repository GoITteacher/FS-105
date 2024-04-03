/**
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */

// const firstName = 'Chelsy ';
// const lastName = 'Emerald';
// const fullName = firstName + lastName;
// console.log(fullName);

// ====================================

// const x = 10;
// const y = 'Hello';
// console.log(y + x);
// ====================================

// const quantity = 15;
// const orderMsg = 'You ordered ??? bots';
// const orderMsg = 'You ordered ' + quantity + ' bots';
// console.log(orderMsg);

// const message = 'This string is 28 chars long';

// ====================================

// const firstName = 'Petya';
// const lastName = 'Vanya';
// const message = `Hello ${firstName + lastName}`;
// console.log(message);

// const x = 10;
// const y = 5;
// 10 * 5 = 50
// const message = `${x} * ${y} = ${x * y}`;
// console.log(message);

// ====================================

/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const msg = `${companyName} has ${repairBots + defenceBots} in stock`;
console.log(msg);
