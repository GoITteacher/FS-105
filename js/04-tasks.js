/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// function printInfo(names, phones) {
//   names = names.split(',');
//   phones = phones.split(',');

//   for (let i = 0; i < names.length; i++) {
//     console.log(`${names[i]} - ${phones[i]}`);
//   }
// }

// printInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   const result = `${hours.toString().padStart(2, '0')}:${minutes
//     .toString()
//     .padStart(2, '0')}`;

//   return result;
// }

// // function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// ============================================

// function fillArray(min, max) {
//   const arr = [];
//   for (let i = min; i <= max; i += 2) {
//     arr.push(i);
//   }
//   return arr;
// }

// const myArr1 = fillArray(20, 50);

// console.log(myArr1);

// ============================================
// чому повертає саме довжину масиву? метод масиву push() використовується для додавання елементів  у кінець масиву. Про повернення довжини масиву методом push() в лекціях нічого не було, або я щось пропустилаю. Бачу що return викликається всередині циклу, як це повязано з методом push() та довжиною масиву?

// [].push()
// ============================================

// Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"

// function showStr(string) {
//   for (let i = 0; i < string.length; i += 2) {
//     console.log(string[i]);
//   }
// }

// showStr('Hello world');

// Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому порядку.
/* 
function showReverseString(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    console.log(string[i]);
  }
}

showReverseString('Helo');
showReverseString('World'); */

// Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне пробіл.

// function showString(string) {
//   for (const symbol of string) {
//     console.log(symbol);
//     if (symbol === ' ') break;
//   }
// }
// showString('Hello world');

// Напиши функцію, яка приймає рядок та повертає перевернутий рядок

// Напиши функцію, яка приймає рядок та повертає перевернутий рядок де кожен другий символ у верхньому регістрі

// Напиши цикл, який виведе на консоль числа від 1 до 10.

// Напиши цикл, який виведе на консоль парні числа від 1 до 20.

// Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".

// Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.

// Напиши цикл, який перевірить, чи число, яке вводить користувач, є простим.

// Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до 10).

// Напиши цикл, який обчислить факторіал числа, введеного користувачем (наприклад, факторіал 5 = 5 _ 4 _ 3 _ 2 _ 1).

// Напиши цикл, який виведе на консоль всі прості числа від 1 до 50.

// Напиши цикл, який знайде найбільший спільний дільник (НСД) двох чисел, введених користувачем.

// =================

// const myUrl = 'Hello world.com';

// const result = myUrl.toLowerCase().replaceAll(' ', '_');

// console.log(result);

// =========================================

// function sum(x = 0, y = 0) {
//   if (x === undefined || y === undefined) return;

//   console.log('x:', x);
//   console.log('y:', y);
//   console.log('x + y = ', x + y);
// }

// sum(2, 25);
