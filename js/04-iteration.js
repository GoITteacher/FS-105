/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const key in feedback) {
//   totalFeedback += feedback[key];
// }

// console.log("totalFeedback: ", totalFeedback);

/**
 * ---------------------------------
 */
// const keys = feedback;
// console.log(keys);

// console.log("totalFeedback: ", totalFeedback);

// const values = feedback;
// console.log(values);

// console.log('totalFeedback: ', totalFeedback);

// ===============================================

// const objA = {
//   x: 10,
//   y: 20,
//   t: 30,
// };

// const objB = {
//   x1: 10,
//   y1: 20,
//   t1: 30,
//   __proto__: objA,
// };

// for (const key in objB) {
//   console.log(key);
// }

// ====================================
// const objA = {
//   x: 10,
//   y: 20,
//   t: 30,
// };

// const keys = Object.keys(objA);
// for (const key of keys) {
//   console.log(key);
// }

// const values = Object.values(objA);
// for (const value of values) {
//   console.log(value);
// }

// ====================================

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const value of Object.values(feedback)) {
//   totalFeedback += item;
// }

// console.log(totalFeedback);

// =====================================

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const values = Object.values(feedback);
// [5, 10, 3]
// for (const item of values) {
//   console.log(item);
// }

// const arr = Object.keys(feedback);
// ['good', 'neutral', 'bad']

// for (const item of arr) {
//   console.log(item);
// }
