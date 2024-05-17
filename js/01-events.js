/**
 * Подія сlick
 *
 * - addEventListener
 * - removeEventListener
 *

 */

/* const btnElem = document.querySelector('.js-click');

btnElem.addEventListener('click', onBtnElemClick);

function onBtnElemClick(event) {
  btnElem.classList.toggle('btn-box');
} */

/* 
- onTargetEvent - onBtnElemClick
- handleTargetEvent - handleBtnElemClick
- targetEventHandler - btnElemClickHandler
*/

//!===============================================================
// * Натискаючи на кнопку "Click me" змусь
// * червоний квадратик зміщуватись на 50px по діагоналі

// const btnElem = document.querySelector('.js-click');
// const boxElem = document.querySelector('.js-box');

// const position = {
//   x: 120,
//   y: 120,
// };

// btnElem.addEventListener('click', (event) => {
//   position.x += 10;
//   position.y += 10;

//   boxElem.style.left = `${position.x}px`;
//   boxElem.style.top = `${position.y}px`;
// });

//!===============================================================

// const addBtnElem = document.querySelector('.js-add');
// const removeBtnElem = document.querySelector('.js-remove');
// const testBtnElem = document.querySelector('.js-test');

// addBtnElem.addEventListener('click', event => {
//   console.log(event);
//   console.log('Hello Add');
//   testBtnElem.addEventListener('click', onTestBtnClick);
// });

// removeBtnElem.addEventListener('click', (event) => {
//   console.log('Hello Remove');
//   testBtnElem.removeEventListener('click', onTestBtnClick);
// });

// function onTestBtnClick(event) {
//   console.log('HELLO TEST');
// }
