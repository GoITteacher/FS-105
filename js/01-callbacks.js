/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

//!============================================================
// function test(x) {
// const x = foo;
//   x();
// }

// function foo() {
//   console.log('Hello foo');
// }

// test(foo);
//!============================================================

// function myDay(test) {
//   console.log('застели ліжко');
//   console.log('почистити зуби');
//   console.log('поснідати');
//   console.log('зібратись у школу');
//   console.log('піти до школи');
//   console.log('позайматись');
//   console.log('повернутись зі школи');

//   callback();

//   console.log('погуляти');
//   console.log('зробити дз');
//   console.log('спати\n\n\n');
// }

// function goToMusicSchool() {
//   console.log('піти до муз школи');
//   console.log('повернутись муз школи');
// }

// function goToDanceSchool() {
//   console.log('піти до школи танців');
//   console.log('повернутись зі школи танців');
// }

// myDay(goToMusicSchool);
// myDay(goToDanceSchool);
// myDay(goToDanceSchool);

//!============================================================
/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, myOperation) {
//   console.log(`A: ${a}, B: ${b}`);
//   const result = myOperation(a, b);
//   console.log(`Result: ${result}`);
// }

// function add(x1, x2) {
//   return x1 + x2;
// }

// function sub(x1, x2) {
//   return x1 - x2;
// }

// function mult(x1, x2) {
//   return x1 * x2;
// }

// function div(x1, x2) {
//   return x1 / x2;
// }

// function area(x1, x2) {
//   return x1 * x2 * Math.PI;
// }

// function toString(x1, x2) {
//   return `${x1}-${x2}`;
// }

// calc(2, 3, toString);

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
  const result = [];
  for (const item of array) {
    const myNum = callback(item);
    result.push(myNum);
  }
  return result;
}

//!===========================================================

// console.log(
//   each([1, 4, 6, 8], function (value) {
//     return value * 2;
//   }),
// );

// console.log(
//   each(['Hello', 'world', 'test'], function (str) {
//     return str.toUpperCase();
//   }),
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

// ========================================
// const arr1 = [1, 2, 3, 45, 6, 7, 8, 8];
// const arr2 = [1, 2, 3, 45, 6, 7, 8, 8];
// const arr3 = [1, 2, 3, 45, 6, 7, 8, 8];

// function callback1(item) {
//   return item / 4;
// }

// const result1 = each(arr1, callback1);
// const result2 = each(arr2, callback1);
// const result3 = each(arr3, callback1);

// console.log(result1);
// console.log(result2);
// console.log(result3);

//!===============================================================
