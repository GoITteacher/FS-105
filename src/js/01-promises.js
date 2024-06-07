/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

//!===============================================================
// const promise = new Promise((resolve, reject) => {
//   let rand = Math.round(Math.random());
//   const isActive = Boolean(rand);
//   setTimeout(() => {
//     if (isActive) {
//       resolve(rand);
//     } else {
//       reject(rand);
//     }
//   }, 100);
// });

//!===============================================================

// promise.then(onFulfilled, onRejected);

// function onFulfilled(message) {
//   console.log(message);
//   console.log('✅ Ням ням');
// }

// function onRejected(message) {
//   console.log(message);
//   console.log('❌ Поверніть гроші');
// }

//!===============================================================

// promise.then(
//   message => {
//     console.log(message);
//     console.log('✅ Ням ням');
//   },
//   message => {
//     console.log(message);
//     console.log('❌ Поверніть гроші');
//   },
// );

// promise
//   .then(message => {
//     console.log(message);
//     console.log('✅ Ням ням');
//   })

//   .catch(message => {
//     console.log(message);
//     console.log('❌ Поверніть гроші');
//   })

//   .finally(() => {
//     console.log('Гарного дня');
//     console.log('Міцного зд');
//     console.log('Гарного дня');
//     console.log('Міцного зд');
//     console.log('Гарного дня');
//     console.log('Міцного зд');
//   });

//!===============================================================

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// const promise = new Promise((resolve, reject) => {
//   let rand = Math.round(Math.random());
//   const isActive = Boolean(rand);
//   setTimeout(() => {
//     if (false) {
//       resolve(rand);
//     } else {
//       reject(rand);
//     }
//   }, 1000);
// });

// promise
//   .catch(err => {
//     console.log('err', err); //0
//   })
//   .then(res1 => {
//     console.log('res1', res1); // undefined
//     return '1';
//   })
//   .then(res2 => {
//     console.log('res2', res2); // 1
//     return '2';
//   })
//   .then(res3 => {
//     console.log('res3', res3); // 2
//   });
