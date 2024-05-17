/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const formEl = document.querySelector('.js-form');

//!===============================================================
/* formEl.addEventListener('submit', e => {
  e.preventDefault();

  const email = formEl.elements.email.value;
  const password = formEl.elements.password.value;
  const comment = formEl.elements.comment.value;
  const test = formEl.elements.test.value;

  const data = { email, password, comment, test };

  console.log(data);
}); */

//!===============================================================

/* formEl.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    email: formEl.elements.email.value,
    password: formEl.elements.password.value,
    comment: formEl.elements.comment.value,
    test: formEl.elements.test.value,
  };

  console.log(data);
}); */

//!===============================================================

/* formEl.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formEl);

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
    comment: formData.get('comment'),
    test: formData.get('test'),
  };

  console.log(data);
}); */

//!===============================================================

// formEl.addEventListener('submit', e => {
//   e.preventDefault();

//   const formData = new FormData(formEl);
//   const data = {};

//   formData.forEach((value, key) => {
//     data[key] = value;
//   });

//   console.log(data);

//   formEl.reset();
// });

//!===============================================================

const formElem = document.querySelector('.js-user-form');
const messagesElem = document.querySelector('.js-messages');

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    username: formElem.elements.username.value,
    message: formElem.elements.message.value,
  };

  const markup = messageTemplate(data);

  messagesElem.insertAdjacentHTML('beforeend', markup);

  formElem.reset();
});

function messageTemplate(obj) {
  return `<li>
  <p>Username: ${obj.username}</p>
  <p>${obj.message}</p>
</li>`;
}
