/**
 * Масив об'єктів
 *
 * - Перебор масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

/* for (const friend of friends) {
  console.log(`${friend.name} - ${friend.online}`);
} */

/* for (let i = 0; i < friends.length; i += 2) {
  console.log(`${friends[i].name} - ${friends[i].online}`);
} */

/* for (const friend of friends) {
  if (friend.online !== true) {
    console.log(friend);
  }
} */

/* for (const friend of friends) {
  friend.online = !friend.online;
} */

// console.table(friends);
// console.table(friends);

/**
 * Пошук друга за іменем
 */
// const friends = [
//   { name: 'Mango', online: false, price: 100, amount: 50 },
//   { name: 'Kiwi', online: true, price: 50, amount: 150 },
//   { name: 'Poly', online: false, price: 20, amount: 200 },
//   { name: 'Ajax', online: false, price: 70, amount: 300 },
//   { name: 'Mango', online: false, price: 30, amount: 500 },
// ];

/* function findFriendByName(allFriends, friendName) {
  for (const friend of allFriends) {
    if (friend.name === friendName) {
      return friend;
    }
  }
  return null;
} */

/* function findFriendByPrice(arr, price, minAmount) {
  const result = [];
  for (const friend of arr) {
    if (friend.price <= price && friend.amount > minAmount) {
      result.push(friend);
    }
  }
  return result;
} */

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));
// console.log(findFriendByName(friends, 'Mango'));

// const obj = findFriendByPrice(friends, 50, 50);
// console.log(obj);

/**
 * Отримуємо імена всіх лрузів
 */
// function getAllNames(allFriends) {}

// console.log(getAllNames(friends));

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
// function getOnlineFriends(allFriends) {}

// console.log(getOnlineFriends(friends));

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

//! =========================================================

// console.log(cars);

/* 
{
    brand: 'Toyota',
    model: 'Camry',
    year: 2019,
    color: 'Silver',
    price: 25000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  }
*/

// console.log(cars);

// function getModels(cars) {
//   const result = [];

//   for (const car of cars) {
//     const str = `${car.brand} ${car.model}`;
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// console.log(getModels(cars));

/* 

{
    brand: 'Toyota',
    model: 'M5',
    year: 2019,
    color: 'Silver',
    price: 25000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  }
  
*/

// function getMarkup(cars) {
//   const result = [];

//   for (const car of cars) {
//     result.push(`<li>${car.brand}-${car.model}</li>`);
//   }

//   return result.join('\n');
// }

// console.log(getMarkup(cars));
