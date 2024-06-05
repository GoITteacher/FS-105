/*
 * Метод setInterval(callback, delay, args)
 */

// const logger = (time) => {
//   console.log(`Лог кожні ${time} мс - ${Date.now()}`);
// };

// console.log("До виклику setInterval");

// console.log("Після виклику setInterval");

setInterval(() => {
  // alert('SPAM');
}, 5000);

/*
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

// let counter = 0;

// const intervalId = setInterval(() => {
//   console.log(counter++);
// }, 100);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 10000);
