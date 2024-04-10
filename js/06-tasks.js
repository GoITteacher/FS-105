/*
 * Напиши скрипт перевірки підписки користувача придоступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = 'free';

// if (sub === 'pro' || sub === 'vip') {
//   console.log('Ok');
// } else {
//   console.log('Error');
// }

// const message = sub === 'pro' || sub === 'vip' ? 'OK' : 'Error';

/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

/* const isOnline = true;
const isFriend = true;
const isDnd = true;

const canOpenChat = isOnline && isFriend && isDnd;

console.log('Можно открыть чат? ', canOpenChat); */

// const priceTicket = 150;

// const userAge = 10;
// const userBalance = 100;

// const isAdmin = false;
// const validAge = userAge >= 18;// false
// const validBalance = userBalance > priceTicket;

// if(validAge && validBalance && isAdmin){

// }

// ====================================================

/*
 * Напиши скрипт, який перевіряє введене користувачем ім'я.
 * Якщо введене значення порожне то виведи рядок "Hello Anonym"
 * Інакше привітай користувача повідомленням "Hello (NAME)"
 */

// const userName = '0';
// if (name) {
//   console.log(`Hello ${name}`);
// } else {
//   console.log(`Hello Anonym`);
// }

// console.log(`Hello ${userName || 'Anonym'}`);
// ================================

// console.log(true && 3); // 3
// console.log(false && 3); // f
// console.log(true && 4 && 'kiwi'); // k
// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);

// // console.log((1 && null && 2) > 0);
// // console.log(null || (2 && 3) || 4);

// ===================================

// console.log(1 && 5); // 5
// console.log(5 && 1); // 1
// console.log(0 && 2); // 0
// console.log(2 && 0); // 0

// console.log('' && 'Mango'); // _
// console.log('Mango' && ''); // _
// console.log('Mango' && 'Poly'); // P
// console.log('Poly' && 'Mango'); // M

// ===================================

// console.log(true || false); // t
// console.log(false || true); // t
// console.log(true || true); // t

// console.log(3 || false); //3
// console.log(false || 3); //3
// console.log(3 || true); //3
// console.log(true || 3); //t

// ===================================

console.log(!true); // f
console.log(!false); // t
console.log(!3); // f
console.log(!'Mango'); // f
console.log(!0); // t
console.log(!''); //t

const isOnline = true;
const isNotOnline = !isOnline;
// ===================================
