/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Обратний відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

// ===========================
// let i = 2;

// console.log(i++);
// console.log(i)
// i+=1;

// console.log(++i);
// i+=1;
// console.log(i)

// const x = i + ++i - i++ * i++;
// console.log(x);

// console.log('Before');
/// ===========================

// for (let start = 10; start > 0; start--) {
//   console.log(start);
// }

// console.log('After');

/**
 * -------------------------------
 */

/* console.log('Before');

let salary = 1700;
const myDream = 1500;

while (salary < myDream) {
  console.log('Хочу ще!');
  salary += Math.round(Math.random() * 500);
  console.log(salary, '- стільки влаштовує?');
}

console.log('Пішов працювати'); */

// =====================================

// let str = 'Hello     world     test     jeya';

// while (true) {
//   str = str.replace('  ', ' ');
//   console.log(str);
// }

// console.log(str);
// =====================================

// let i = 10;

// while (i > 0) {
//   console.log('Hello');
//   i--;
// }

// =====================================

// let password = '';

// while (password.length < 6) {
//   password = prompt('Enter new password:');
// }

// console.log(password);

// =====================================

// const random = Math.round(Math.random() * 100); // 55
// let userValue;

// while (userValue != random) {
//   userValue = prompt('Enter value'); // string - "55"

//   if (userValue > random) {
//     console.log('<');
//   } else {
//     console.log('>');
//   }
// }

// console.log('Win');
// =====================================

// let salary = 1010;
// const myDream = 1000;

// while (salary < myDream) {
//   console.log('Хочу більше');
//   salary += 107;
// }

// do {
//   console.log('Хочу більше');
//   salary += 107;
// } while (salary < myDream);

// console.log(salary);
// =====================================

/**
 * -------------------------------
 */

// let a = 10;

// console.log(a);
// console.log(b);

/**
 * -------------------------------
 */

// console.log('Before while loop');

// let counter = 0;

// console.log('After while loop');

// ========================================

// const random = Math.round(Math.random() * 100);

// for (let i = 0; i < 100; i++) {
//   console.log('Копаю');
//   if (i === random) {
//     console.log('Урааа');
//     break;
//   }
// }

// debugger;
// for (let i = 0; i < 50; i++) {
//   console.log('------------');
//   if (i % 3 !== 0) continue;
//   console.log('Опрацьовуємо', i);
// }
