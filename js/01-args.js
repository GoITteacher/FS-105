/**
 * Псевдомасив arguments и Array.from
 */
// ========================================

// const res = Math.max(10, 20, 30, 40, 1, 3, 6, 8, 1502);
// ========================================

// function fn() {
//   const args = Array.from(arguments);
//   console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

// function calculateTotal() {
//   const args = Array.from(arguments);

//   let sum = 0;
//   for (const item of args) {
//     console.log(`${sum} += ${item}`);
//     sum += item;
//   }

//   return sum;
// }

// const x1 = calculateTotal(1, 5, 3, 8, 7, 4, 3);
// console.log(x1);

// calculateTotal(10, 20, 30);
// calculateTotal(10, 20, 30, 40, 50);

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */

// function calAverage() {
//   const args = Array.from(arguments);
//   let avg = 0;

//   for (const item of args) {
//     avg += item;
//   }

//   return avg / args.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// ========================================

// function myArr() {
//   const args = Array.from(arguments);
//   const result = [];

//   for (const item of args) {
//     if (item % 2 === 0) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// const arr1 = myArr(1, 3, 5, 1, 3, 46, 2, 1, 3, 4, 54, 2, 34);
// console.log(arr1);

// =========================================

// function getPositiveArr() {
//   const args = Array.from(arguments);
//   const result = [];

//   for (const num of args) {
//     if (num > 0) {
//       result.push(num);
//     }
//   }

//   return result;
// }

// const arr1 = getPositiveArr(-1, 3, -5, 3, 4, 6, -2, -4, -7);
// console.log(arr1);

// =============================================

/* 
Напишіть функцію яка приймає першим параметром мінімальне значення. Та довільну кількість аргументів.

Потрібно повернути масив лише тих аргументів які більші за мінімальне значення

*/

// function getArr() {
//   const args = Array.from(arguments);
//   const result = [];
//   const min = args.shift();

//   for (const num of args) {
//     if (num >= min) {
//       result.push(num);
//     }
//   }

//   console.log(result);
// }

// getArr(3, 1, 2, 3, 4, 6, 7, 2, 1, 2, 3, 4);
