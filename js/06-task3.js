/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

// function calculateHousePerimeter({ a, b, c, d }) {
//   const perimeter = a + b + c + d;
//   return perimeter;
// }

// const info = {
//   a: 10,
//   b: 15,
//   c: 10,
//   d: 15,
// };

// const perimeter = calculateHousePerimeter(info);
// console.log(`Периметр будинку: ${perimeter}`);

//!===============================================================

// function carTemplate() {
//   return `<li class="item">
//   <h1>awdawd</h1>
//   <h2>awdawd</h2>
// </li>`;
// }

// const ulElem = document.querySelector('ul');
// ulElem.style.border = '1px solid black';

//!===============================================================

function carTemplate({ brand, model } = {}) {
  console.log(brand, model);
  console.log('Hello');
}

carTemplate();
//!===============================================================
