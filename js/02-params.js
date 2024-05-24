/**
 * Деструктуризація об'єкта в параметрах функції
 */

const user = {
  username: 'Jacob name',
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

// Без деструктуризації
// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`,
//   );
// }

// З деструктуризацією

// function getUserName({ username, skills: { html, css, js } }) {
//   console.log(
//     `Hello my name is ${username}, I know html - ${html}, css - ${css} and js - ${js}`,
//   );
// }

// getUserName(user);

//!===============================================================

// function foo({ x, y } = {}) {
// const {x,y} = { x: 10, y: 20 } || {}
//   console.log(x, y);
// }

// foo();
//!===============================================================
/* 
function updateBook({ id, ...book }) {
  console.log(id, book);
}

const book = {
  id: 1123,
  title: 'awda',
  author: '123',
  desc: '123',
};

updateBook(book); */

//!===============================================================

// function colorTemplate({ name, title, author }) {
//   return `
//   <li>
//   ${name}
//   ${title}
//   ${author}
//   </li>`;
// }
