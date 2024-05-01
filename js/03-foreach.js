/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

//!===============================================================

// const arr = [1, 3, 5, 6, 2, 1, 2, 4, 6];

// arr.forEach((el, i, arr) => {
//   console.log(el);
// });

/* 
callback(1, 0 ,arr)
callback(3, 1 ,arr)
callback(5, 2 ,arr)
callback(6, 3 ,arr)
callback(2, 4 ,arr)
callback(1, 5 ,arr)
callback(2, 6 ,arr)
callback(4, 7 ,arr)
callback(6, 8 ,arr)
*/

//!===============================================================
// const numbers = [5, 10, 15, 20, 25];
// let total = 0;

// numbers.forEach((el, idx, arr) => {
//   console.log(numbers);
//   total += el;
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// function logItems(items) {
//   items.forEach((el, i) => {
//     console.log(`${i + 1} - ${el}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   nameList.forEach((el, i, arr) => {
//     console.log(`${el}: ${phoneList[i]}`);
//   });
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// function calculateAverage(...args) {
//   let total = 0;
//   args.forEach(el => {
//     total += el;
//   });
//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
//!===============================================================
