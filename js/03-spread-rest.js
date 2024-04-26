/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

// !===============================================

function getTotal(a, ...nums) {
  console.log(nums);
}

// getTotal(1, 2);

// function getTotal(min, ...arr) {
//   let total = 0;
//   for (const item of arr) {
//     if (item > min) {
//       total += item;
//     }
//   }
//   return total;
// }

// const result = getTotal(3, 1, 2, 3, 4, 5);
// console.log(result);

// !===============================================
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const copy = [...numbers];

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const result = ['START', ...arr1, ...arr2, ...arr3, 'END'];

// console.log(result);

// !===============================================

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];
// const max = Math.max(...arr1, ...arr2, ...arr3);
// console.log(max);

// !===============================================
// const arr1 = [1, 2, 3];
// const result = [1, 3, 5, 7, 1, 3, 66];

// result.push(...arr1);
// result.unshift(...arr1);

// console.log(result);

// !===============================================

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];
// const min = Math.min(...temps);
// const max = Math.max(...temps);

/**
 * Створення масиву і тип за посиланням
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a === b);

// a[0].x = 25;

// console.log(b[0].x);

/*
 * Поєднуємо кілька масивів в один через spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [];
// console.log(allTemps);

/*
 * Створення об'єкта
 */
// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };
// const objC = { ...objA, ...objB };

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */

// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// finalSettings = { ...defaultSettings };

// console.log(finalSettings);

// ======================================
