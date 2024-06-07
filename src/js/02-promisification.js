/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// function createPromise(value, delay, status) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (status) resolve(value);
//       else reject(value);
//     }, delay);
//   });

//   return promise;
// }

// const promise1 = createPromise('Hello1', 3000, true);
// const promise2 = createPromise('Hello2', 5000, true);
// const promise3 = createPromise('Hello4', 1000, true);

// promise1.then(onFulfilled).catch(onRejected);
// promise2.then(onFulfilled).catch(onRejected);
// promise3.then(onFulfilled).catch(onRejected);

//!===============================================================

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function foo() {
//   const arr = [1, 2, 34, 1, 2, 3, 1, , 12];
//   arr.splice();
//   return Promise.resolve(arr);
// }

// foo()
//   .then(res => {
//     console.log(res);
//     if (res.length > 10) {
//       return res;
//     } else {
//       return Promise.reject('test');
//     }
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('err', err);
//   });

//!===============================================================
function onFulfilled(message) {
  console.log('✅', message);
}

function onRejected(message) {
  console.log('❌', message);
}

//!===============================================================

// function createPromise(value, delay, status) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (status) resolve(value);
//       else reject(value);
//     }, delay);
//   });
//   return promise;
// }

// function promiseGenerator() {
//   const len = 5;
//   for (let i = 0; i < len; i++) {
//     const rand = Boolean(Math.round(Math.random()));
//     const promise = createPromise(i, i * 1000, rand);
//     promise.then(onFulfilled).catch(onRejected);
//   }
// }

// promiseGenerator();

//!===============================================================

function createPromise(value, delay, status) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) resolve(value);
      else reject(value);
    }, delay);
  });
  return promise;
}

const p1 = createPromise('Data 1', 5000, true);
const p2 = createPromise('Data 2', 1000, false);
const p3 = createPromise('Data 3', 3000, true);
const p4 = createPromise('Data 4', 2000, false);
const p5 = createPromise('Data 5', 4000, true);

const arr = [p1, p2, p3, p4, p5];

// Promise.all(arr)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('❌', err);
//   });

// Promise.allSettled(arr).then(data => {
//   console.log(data);
// });

// Promise.race(arr)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('❌', err);
//   });
