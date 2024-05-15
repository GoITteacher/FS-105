/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */
//!===============================================================
// const btnElem = document.querySelector('.js-magic-btn');
// btnElem.textContent = 'Hello world';

// const lastLiEl = document.querySelector('ul.site-nav > li:nth-child(2)');
// const aElem = lastLiEl.querySelector('a');

// const buttonElem = document.querySelector('.magic-btn');
// console.log(buttonElem);
//!===============================================================

// const listElem = document.querySelectorAll('ul a');
// for (const elem of listElem) {
//   console.log(elem.textContent);
// }

// const listElem = document.querySelectorAll('ul a');
// console.log(listElem.length);

// const listElem = document.querySelectorAll('.test');
// console.log(listElem);
//!===============================================================

// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByName();
// document.getElementsByTagName();

// const btnElem = document.getElementById('testBtn');
// const list = document.getElementsByName('test1');
// console.log(list);

//!===============================================================

/*
 * Властивості «навігації» по DOM-вузлах
 *
 */

// const liElem = document.querySelector('li');

// const elem1 = liElem.nextElementSibling;
// const elem2 = liElem.previousElementSibling;

// const parent = liElem.parentElement.parentElement;

// const firstChild = liElem.firstElementChild;
// console.log(firstChild);

//!===============================================================

// const ulElem = document.querySelector('ul');

// const firstLiElem = ulElem.firstElementChild;
// const lastLiElem = ulElem.lastElementChild;

// console.log(firstLiElem);
// console.log(lastLiElem);

//!===============================================================

// const ulElem = document.querySelector('ul');
// const secondLiElem = ulElem.children[1];
// console.log(secondLiElem);

//!===============================================================
