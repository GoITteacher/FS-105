/*
 * Напиши скрипт перевірки підписки користувача придоступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

const sub = 'free';

/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

const isOnline = true;
const isFriend = true;
const isDnd = true;

// const canOpenChat = ;
// console.log("Можно открыть чат? ", canOpenChat);

// ====================================================

/*
 * Напиши скрипт, який перевіряє введене користувачем ім'я.
 * Якщо введене значення порожне то виведи рядок "Hello Anonym"
 * Інакше привітай користувача повідомленням "Hello (NAME)"
 */

const name = 'Vasya';

// ================================

console.log(true && 3);
console.log(false && 3);
console.log(true && 4 && 'kiwi');
console.log(true && 0 && 'kiwi');

console.log(true || 3);
console.log(true || 3 || 4);
console.log(true || false || 7);
console.log(null || 2 || undefined);

console.log((1 && null && 2) > 0);
console.log(null || (2 && 3) || 4);

// ===================================

console.log(1 && 5);
console.log(5 && 1);
console.log(0 && 2);
console.log(2 && 0);
console.log('' && 'Mango');
console.log('Mango' && '');
console.log('Mango' && 'Poly');
console.log('Poly' && 'Mango');

// ===================================

console.log(true || false);
console.log(false || true);
console.log(true || true);

console.log(3 || false);
console.log(false || 3);
console.log(3 || true);
console.log(true || 3);

// ===================================

console.log(!true);
console.log(!false);
console.log(!3);
console.log(!'Mango');
console.log(!0);
console.log(!'');

// const isOnline = true;
// const isNotOnline = !isOnline;
// ===================================
