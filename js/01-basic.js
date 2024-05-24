/**
 * Деструктуризація об'єкта
 */
//!===============================================================
// const user = {
//   username: 'Jacob name',
//   age: 25,
//   city: 'Dnipro',
//   country: 'Ukraine',
//   isStudent: false,
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };
//!===============================================================

// const city = user.city;
// const isStudent = user.isStudent;
// const username = user.username;
// const age = user.age;
// const country = user.country;

// const { country, city, age, username } = user;

//!===============================================================
// const message = {
//   update_id: 936354609,
//   message_id: 1698231,
//   from: {
//     id: 433982686,
//     is_bot: false,
//     first_name: 'Volodymyr',
//     username: 'pashchenko_v_r',
//     language_code: 'uk',
//   },
//   chat: {
//     id: 433982686,
//     first_name: 'Volodymyr',
//     username: 'pashchenko_v_r',
//     type: 'private',
//   },
//   date: 1716567768,
//   text: 'Test',
// };

// const { update_id, date, text, message_id } = message;

// console.log(message);

//!===============================================================

// {oldName: newName} = object

// const message = {
//   update_id: 936354609,
//   message_id: 1698231,
//   from: {
//     id: 433982686,
//     is_bot: false,
//     first_name: 'Volodymyr',
//     username: 'pashchenko_v_r',
//     language_code: 'uk',
//   },
//   chat: {
//     id: 433982686,
//     first_name: 'Volodymyr',
//     username: 'pashchenko_v_r',
//     type: 'private',
//   },
//   date: 1716567768,
//   text: 'Test',
// };

// const { text: myText, text: myText2, text: myText3 } = message;

// const myText = message.text;
// const myText2 = message.text;
// const myText3 = message.text;

//!===============================================================
/* const message = {
  update_id: 936354609,
  message_id: 1698231,
  from: {
    id: 433982686,
    is_bot: false,
    first_name: 'Volodymyr',
    username: 'pashchenko_v_r',
    language_code: 'uk',
  },
  chat: {
    id: 433982686,
    first_name: 'Volodymyr',
    username: 'pashchenko_v_r',
    type: 'private',
  },
  date: 1716567768,
  text: 'Test',
};

const { text: messageText, date: messageDate } = message; */
//!===============================================================
// const user = {
//   username: 'Jacob name',
//   age: 25,
//   city: 'Dnipro',
//   country: 'Ukraine',
//   isStudent: false,
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { username, x = 'Hello world', y = 0 } = user;

/* 
const username = user.username;
const x = user.x || 'Hello world';
const y = user.y || 0;
*/
//!===============================================================

// const user = {
//   age: 25,
//   city: 'Dnipro',
//   country: 'Ukraine',
//   isStudent: false,
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   x: 10,
// };

// const {
//   username: firstName = 'Anonymous',
//   x: firstNumber = 1,
//   y: secondNumber = 1,
// } = user;

// console.log(firstName);
// console.log(firstNumber);
// console.log(secondNumber);

//!===============================================================

// const user = {
//   age: 25,
//   city: 'Dnipro',
//   country: 'Ukraine',
//   isStudent: false,
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   x: 10,
// };

// const {
//   skills: { html },
// } = user;

// const {html} = users.skills;

// const {
//   skills: { html, css, js },
// } = user;

//!===============================================================
/**
 * Глибока деструктуризація об'єкта
 */

// const messageData = {
//   update_id: 936354609,
//   message: {
//     message_id: 1698231,
//     from: {
//       id: 433982686,
//       is_bot: false,
//       first_name: 'Volodymyr',
//       username: 'pashchenko_v_r',
//       language_code: 'uk',
//     },
//     chat: {
//       id: 433982686,
//       first_name: 'Volodymyr',
//       username: 'pashchenko_v_r',
//       type: 'private',
//     },
//     date: 1716567768,
//     text: 'Test',
//   },
// };
//!===============================================================
// const {
//   message: {
//     text,
//     date,
//     from: { first_name, username },
//   },
// } = messageData;

// console.log(text, date, first_name, username);
//!===============================================================

// const messageData = {
//   update_id: 936354609,
//   message: {
//     message_id: 1698231,
//     from: {
//       id: 433982686,
//       is_bot: false,
//       first_name: 'Volodymyr',
//       username: 'pashchenko_v_r',
//       language_code: 'uk',
//     },
//     chat: {
//       id: 433982686,
//       first_name: 'Volodymyr',
//       username: 'pashchenko_v_r',
//       type: 'private',
//     },
//     date: 1716567768,
//     text: 'Test',
//   },
// };

// const { from: { x = 1, y = 1 } = {} } = messageData;
// console.log(x, y);

// const { x=1, y=1 } = undefined || {};

// console.log(x, y);
//!===============================================================

/* const book = {
  id: 123,
  author: 'Volodka',
  title: 'MyBook',
  desc: 'test',
};

const { id, ...myBook } = book;

console.log(id);
console.log(myBook); */
//!===============================================================
// const book = {
//   id: 123,
//   author: 'Volodka',
//   title: 'MyBook',
//   desc: 'test',
//   pages: 300,
//   price: 50,
//   year: 2025,
//   address: {
//     city: 'Dnipro',
//     country: 'Ukraine',
//     x: 1000,
//     y: 2000,
//   },
// };

// const { id, pages, year, price, ...newBook } = book;
// console.log(newBook);

// const {
//   address: { city, country, ...location },
// } = book;

// console.log(location);
//!===============================================================
//!===============================================================
//!===============================================================
//!===============================================================
/**
 * Деструктуризація масива
 */

// const arr = [1, 2, 3, 4, 5];

// const [x1, x2, x3] = arr;

// const x1 = arr[0]
// const x2 = arr[1]
// const x3 = arr[2]
//!===============================================================

// const rgb = [123, 12, 52, 0.3];
// const [red, green, blue] = rgb;
// const [red, , blue] = rgb;
// const [, , blue] = rgb;
// const [red, green, blue, alpha = 1] = rgb;
// console.log(red, green, blue, alpha);
//!===============================================================

// const arr = ['Hello', 1, 2, 4, 4, 2, 12, 3, 45, 3, 1, 12];

// const [str, ...numbers] = arr;

// console.log(str);
// console.log(numbers);

//!===============================================================
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const [[x1, x2, x3], [x4, x5, x6], [x7, x8, x9]] = arr;

// console.log(x1, x2, x3);

// const data = {
//   numbers: [1, 2, 3],
// };

// const {
//   numbers: [x1, x2, x3],
// } = data;

// console.log(x1, x2, x3);
//!===============================================================

// let x = 10;
// let y = 20;

// [x, y] = [y, x];

// let temp = x;
// x = y;
// y = temp;

//!===============================================================

// let t1 = 10;
// let t2 = 50;
// let t3 = 25;
// let t4 = 56;
// let t5 = 12;

// [t1, t2, t3] = [t5, t1, t4];

// const x1 = 10;
// const x2 = 25;
// const x3 = 40;
