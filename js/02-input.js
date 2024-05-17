/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

const usernameElem = document.querySelector('.js-user-name');
const btnElem = document.querySelector('.js-btn');

// usernameElem.addEventListener('input', onUsernameInput);

// function onUsernameInput() {
//   const value = usernameElem.value;
//   const len = usernameElem.dataset.len;

//   if (value.length > len) {
//     usernameElem.classList.add('valid');
//     usernameElem.classList.remove('invalid');
//     btnElem.disabled = false;
//   } else {
//     usernameElem.classList.add('invalid');
//     usernameElem.classList.remove('valid');
//     btnElem.disabled = true;
//   }
// }

//!===============================================================

usernameElem.addEventListener('focus', e => {
  usernameElem.classList.remove('valid');
  usernameElem.classList.remove('invalid');
});

usernameElem.addEventListener('blur', e => {
  const value = usernameElem.value;
  const len = usernameElem.dataset.len;
  const myClass = value.length > len ? 'valid' : 'invalid';
  usernameElem.classList.add(myClass);
});

//!===============================================================

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

usernameElem.addEventListener('blur', e => {
  const username = usernameElem.value;
  alert(`Hello ${username}`);
});
