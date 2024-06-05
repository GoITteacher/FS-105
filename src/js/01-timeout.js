/*
 * Метод window.setTimeout(callback, delay, args)
 */

//!===============================================================

// console.log('Hello world');

// function callback() {
//   console.log('TEST');
// }

// setTimeout(() => {
//   console.log('Hello 1');
// }, 1000);

// setTimeout(() => {
//   console.log('Hello 2');
// }, 2000);

// setTimeout(() => {
//   console.log('Hello3');
// }, 3000);

// for (let i = 0; i < 100000; i++) {
//   console.log('test');
// }

// setTimeout(() => {}, 5000);
//!===============================================================

// console.log('До виклику setTimeout');

// console.log('1 - Всередині зворотного виклику для setTimeout');

// console.log('2 - Всередині зворотного виклику для setTimeout');

// console.log('Після виклику setTimeout');

//!===============================================================
// for (let i = 1; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

//!===============================================================
/**
 * Можливість передати параметри для колбеку
 */

// for (let i = 4; i > 0; i--) {
//   setTimeout(callback, i * 1000, i, 1, 2);
// }

// function callback(value, x, y) {
//   console.log(value, x, y);
// }

//!===============================================================

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

// setTimeout(() => {
//   clearTimeout(id);
//   console.log('Remove SetTimeout');
// }, 7000);

// const id = setTimeout(() => {
//   console.log('Hello world');
// }, 2000);
