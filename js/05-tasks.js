/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user['premium'] = false;

// for (const i of Object.keys(user)) {
//   console.log(`${i} - ${user[i]}`);
// }

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const obj = {
//   x: 10,
//   y: 20,
//   t: 30,
// };

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let total = 0;

// for (const salary of Object.values(salaries)) {
//   total += salary;
// }

// for (const key in salaries) {
//   total += salaries[key];
// }

// console.log(total);

// ========================================

/* "Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

Функція оголошує два параметри:

products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні."
 */

// function isEnoughCapacity(products, containerSize) {
//   let totalSize = 0;

//   for (const value of Object.values(products)) {
//     totalSize += value;
//   }

//   return totalSize < containerSize;
// }

// const products = {
//   apples: 2,
//   grapes: 4,
//   cherry: 100,
// };

// const products1 = {
//   apples: 50,
//   grapes: 20,
//   cherry: 10,
// };

// isEnoughCapacity(products, 10);
// isEnoughCapacity(products1, 10);

// =====================================

/* Як можна вибрати з масиву максимальний елемент за допомогою Math.maх(), бо в практичній пише, "Для передачі аргументів методу `Math.min()` використовується синтаксис `...` на масиві `allScores`". Застосувала метод таким чином const bestScore =Math.max.apply(null, allScores). Значення передало, але помилку видає в синтаксисі. Дякую) */

// const arr = [1, 2, 3, 4, 65, 7, 8, 8];
// const max = Math.max(...arr);

// ======================================

// Як пройтись по масиву та залишити тільки унікальні значення? Це з codewars.

// const arr = [1, 2, 3, 4, 2, 1, 1, 2, 3, 5, 6, 2, 1, 1, 2, 4, 5, 6, 3, 1];
// const result = [1, 2, 3, 4, 5];

// for (const item of arr) {
//   if (!result.includes(item)) {
//     result.push(item);
//   }
// }

// console.log(result);

// ======================================
