/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// let counter = 0;

// for (const num of numbers) {
//   if (num % 2 !== 0) {
//     total += num;
//     counter++;
//   }
// }

// console.log(total);

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i++) {
//   const name = namesArr[i];
//   const phone = phonesArr[i];
//   console.log(`${name} - ${phone}`);
// }

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = 'Welcome to the future';

// const res = string.split(' ').slice(1, -1).join(' ').trim();

// console.log(res);

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

// const values = [2, 17, 94, 1, 23, 37];
// let min = values[0]; // 1

// for (const value of values) {
//   if (value < min) {
//     min = value;
//   }
// }

// console.log(min);

// ===============
/* 
Функція createArrayOfNumbers(min, max) приймає два параметра:

min - ціле число, з якого починаються обчислення
max - ціле число, до якого включно триватимуть обчислення
Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно." */

/* function getTotal(min, max) {
  let total = 0;
  for (let i = min; i <= max; i++) {
    console.log(`${total} + ${i} = ${total + i}`);
    total += i;
  }
  return total;
} */

// function getTotal(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i++) {
//     console.log(`arr.push(${i})`);
//     arr.push(i);
//   }
//   return arr;
// }

// getTotal(10, 20);

// let message = 'Hello world test';
// const res = message.toLowerCase().replaceAll(' ', '_');
// console.log(res);
