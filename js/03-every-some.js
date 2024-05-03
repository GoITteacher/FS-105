const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: false },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: true },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/**
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */
// const isAllOnline = players.every(player => player.online);

// true && false && true && false && true = true;

// console.log('isAllOnline: ', isAllOnline);

//!===============================================================

// const arr = [4, 1, 3, 5, 2, 4, 6];

// while (!arr.every(el => el === 0)) {
//   console.log(arr.join(' '));
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       arr[i] -= 1;
//     }
//   }
// }

//!===============================================================

/**
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */
// const isAnyOnline = players.some(el => el.online);
// false || false || true || false || false = true;

// console.log('isAnyOnline: ', isAnyOnline);
