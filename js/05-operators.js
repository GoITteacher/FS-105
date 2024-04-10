/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(0.1)); // true
// console.log(Boolean(-20)); // true
// console.log(Boolean('hello')); // true
// console.log(Boolean('undefined')); // true
// console.log(Boolean(' ')); // true
// console.log(Boolean('')); // true

/**
 * --------------------------------
 */

/* 
ЗАВЖДИ повертає ліву частину якщо 
там false в інших випадках повертає праву
*/

// console.log(1 && 4); // 4
// console.log(2 && 4); // 4
// console.log(5 && 4); // 4
// console.log(7 && 4); // 4
// console.log(9 && 4); // 4
// console.log(3 && 4); // 4
// console.log(9 && 4); // 4
// console.log(2 && 4); // 4
// console.log(6 && 4); // 4
// console.log(7 && 4); // 4

// console.log(0 && 1);
// console.log(0 && 2);
// console.log(0 && 6);
// console.log(0 && 1);
// console.log(0 && 'Hello');
// console.log(0 && 'awd');
// console.log(0 && 0);
// console.log(0 && false);
// console.log(0 && true);
/**
 * --------------------------------
 */

/* ЗАВЖДИ повертає ліву частину якщо 
там true в інших випадках повертає праву */

// console.log(true || 5);
// console.log(true || false);
// console.log(true || 0);
// console.log(true || null);
// console.log(true || true);
// console.log(true || false);
// console.log(true || 9);

// console.log(false || 0);
// console.log(false || 2);
// console.log(false || false);
// console.log(false || null);
// console.log(0 || null);

/**
 * --------------------------------
 */

// console.log(!5); // false
// console.log(!false); // true
// console.log(!null); // true
// console.log(!0); // true
// console.log(!'Hello'); // false

/**
 * ====================================
 */

// console.log(true && 3); // 3

// console.log(false && 3); // f

// console.log(true && 4 && 'kiwi'); // k

// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3);// t

// console.log(true || 3 || 4);//t

// console.log(true || false || 7);// t

// console.log(null || 2 || undefined);// 2

// console.log((1 && null && 2) > 0); // f

// console.log(null || (2 && 3) || 4); // 3

// ===================================

// const name = '';

// const username = name || 'Anonym';

// console.log(`Hello ${username}`);

// ===================================

// const isActive = false;
// const x = isActive && 'Hello';

// ====================================

/* 
true - 1;
false - 0;
&& - *;
|| - +
*/

// true || false && true && false && false || true && false;
//  1 + (0 * 1 * 0 * 0) + (1 * 0);
// 1 + 0 + 0 = 1

// false && false && true || true || true || false && false;
// 0 * 0 * 1 + 1 + 1 + 0 * 0 = 2

// if ((true && true) || false || true) {
// }
