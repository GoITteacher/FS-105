/**
 * Перетворення типів: числа
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

// const x = Number('5px');
// const x = 10 + Number('25');

// console.log(x);

console.log(Number('5')); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number('Jacob')); // NaN
console.log(Number('25px')); // NaN

console.log('5' * 2); // 10
console.log('10' - 5); // 5
console.log(5 + true); // 6
console.log(5 - true); // 4
