/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */
//!===============================================================
// const imageElem = document.querySelector('.js-image');

// console.log(imageElem.src);
// console.log(imageElem.width);

//!===============================================================

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

// const imageElem = document.querySelector('.js-image');

// imageElem.setAttribute('hello', 'Hello world');
// imageElem.setAttribute('src', 'test');
// imageElem.setAttribute('height', '300');

// console.log(imageElem.getAttribute('alt'));

// imageElem.removeAttribute('alt');

// console.log(imageElem.hasAttribute('disable'));
//!===============================================================
/* const images = document.querySelectorAll('img');

let count = 0;
for (const elem of images) {
  elem.setAttribute(
    'src',
    `https://source.unsplash.com/1280x720/?random=${count++}&test`,
  );
} */

//!===============================================================

/*
 * Data-атрибути
 */

// const buttonsElem = document.querySelectorAll('button');

// console.log(buttonsElem[0].getAttribute('data-action'));
// console.log(buttonsElem[1].getAttribute('data-action'));
// console.log(buttonsElem[2].getAttribute('data-action'));

// const btnElem = buttonsElem[0];

// console.log(btnElem.dataset.action);
// console.log(btnElem.dataset.id);
// console.log(btnElem.dataset.text);

// btnElem.dataset.value = 'hello';

//!===============================================================

// const containerElem = document.querySelector('.js-test-container');

// console.log(containerElem);

// const pElem = containerElem.children[0];
// const btnElem = containerElem.children[1];
// const inputElem = containerElem.children[2];

// pElem.textContent = 'test';
// btnElem.textContent = 'test';
// inputElem.textContent = 'test';

// inputElem.value = 'test';
// console.log(inputElem.value);

// inputElem.setAttribute('placeholder', 'TEST PLACEHOLDER');

//!===============================================================
