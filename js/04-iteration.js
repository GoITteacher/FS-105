/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

// for (let i = 0; i < 10; i++) {
//   console.log('-', i);
// }
// =================================

// debugger;
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// for (let i = friends.length - 1; i >= 0; i += 2) {
//   console.log(friends[i]);
// }

// ==================================
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (let i = 0; i < friends.length; i += 1) {
//   console.log(friends[i]);
//   friends[i] = friends[i].toUpperCase();
// }

// console.table(friends);
// ==================================

const arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] += 10;
// }
// for (let i = 0; i < arr.length; i += 2) {
//   arr[i] *= -1;
// }
// console.log(arr);
// ==================================

// const salaries = [500, 600, 100, 500, 200, 700];
// let total = 0;

// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);
// ==================================

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// for (const friend of friends) {
//   console.log(friend);
// }

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const numbers = values.split(' ');
// const width = +numbers[0];
// const height = +numbers[1];
// const area = width * height;
// console.log(area);

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i++) {
//   const message = `${i + 1}) ${fruits[i]}`;
//   console.log(message);
// }
