/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

// const date = new Date('2025 05 31');
// const date = new Date('2025-05-31');
// const date = new Date('2025/05/31');
// const date = new Date('03.05.2025');
// const date = new Date('2025 05 31');
// const date = new Date('2025 05 31');
// const date = new Date('2025 05 31');

// const date = new Date('03.04.2021 14:26:07');
// const date = new Date('14:26:07');

// console.log(date);

// const date1 = new Date('1970 01 01 03:05:00');
// const date2 = new Date('1970 01 01 03:08:00');

// console.log(date2 - date1);

//!===============================================================
// const hour = 1000 * 60 * 60;

// const date = new Date(hour);
//!===============================================================

// const date = new Date();

// console.log(date.getTime());
//!===============================================================

// const date = new Date();
// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

//!===============================================================
// setInterval(() => {
//   const date = new Date();

//   console.log(date.getHours(), date.getMinutes(), date.getSeconds());
// }, 1000);

//!===============================================================

// const date = new Date('01.29.2021 13:22:31');

// date.setFullYear(2025);
// date.setMonth(25);
// date.setDate(date.getDate() + 7);
// date.setDate(-10);
// date.setFullYear();
// date.setMonth();
// date.setDate();
// date.setHours();
// date.setMinutes();
// date.setSeconds();
// date.setMilliseconds();
// date.setTime(0);

// console.log(date);

//!===============================================================

// const date = new Date();
// console.log(date.getHours());
// console.log(date.getUTCHours());

//!===============================================================

// moment-js
// date-fns

//!===============================================================
// const initTime = Date.now();

// setInterval(() => {
//   const currentTime = Date.now();
//   const diff = currentTime - initTime;
//   console.log(diff);
// }, 1000);
