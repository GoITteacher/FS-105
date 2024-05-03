/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */
//!===============================================================

// const arr = ['1', '3', '5', '1', '2', '4', '11', '6', '2', '1', '25', '2', '4'];

// const result = arr.toSorted();
// const result = arr.sort();

// console.log(arr);
// console.log(result);

//!===============================================================
// const numbers = [1, 3, 4, 1, 2, 4, 6, 2, 2, 2, 5];

// const sorted = numbers.toSorted((b, a) => {
//   return a - b;
// });

// console.log('sorted ', sorted);
//!===============================================================

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Pol', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const result = players.toSorted((a, b) => {
//   return a.name.localeCompare(b.name);
// });

// console.table(result);

//!===============================================================

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   })
// );

// const descSortedNumbers = numbers;
// const ascSortedNumbers = numbers;
// console.log("descSortedNumbers", descSortedNumbers);
// console.log("ascSortedNumbers", ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Pol', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const result = players.toSorted((user2, user1) => {
//   return user1.name.length - user2.name.length;
// });

// console.table(result);

// За ігровим часом
// const sortedByBestPlayers = players.toSorted((b, a) => {
//   return a.timePlayed - b.timePlayed;
// });
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = players;
// console.table(sortedByWorstPlayers);

// // По первой букве имени
// const byName = players;
// console.table(byName);

//!===============================================================

const cars = [
  {
    brand: 'Toyota',
    model: 'Camry',
    year: 2019,
    color: 'Silver',
    price: 25000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Honda',
    model: 'Accord',
    year: 2020,
    color: 'White',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    color: 'Red',
    price: 50000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2018,
    color: 'Black',
    price: 45000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'BMW',
    model: 'M5',
    year: 2022,
    color: 'Blue',
    price: 70000,
    amount: 2,
    isSportCar: true,
    type: 'Sedan',
  },
  {
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2020,
    color: 'Silver',
    price: 60000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Audi',
    model: 'A4',
    year: 2021,
    color: 'Gray',
    price: 45000,
    amount: 4,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Lamborghini',
    model: 'Huracan',
    year: 2023,
    color: 'Yellow',
    price: 300000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Ferrari',
    model: '488 GTB',
    year: 2022,
    color: 'Red',
    price: 350000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Porsche',
    model: '911',
    year: 2021,
    color: 'White',
    price: 120000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Toyota',
    model: 'Golf',
    year: 2020,
    color: 'Black',
    price: 20000,
    amount: 6,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Subaru',
    model: 'Forester',
    year: 2021,
    color: 'Green',
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Jeep',
    model: 'Wrangler',
    year: 2022,
    color: 'Orange',
    price: 35000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Mazda',
    model: 'CX-5',
    year: 2020,
    color: 'Red',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Kia',
    model: 'Soul',
    year: 2021,
    color: 'Yellow',
    price: 20000,
    amount: 4,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Toyota',
    model: 'Tucson',
    year: 2022,
    color: 'White',
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2019,
    color: 'Silver',
    price: 22000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Volvo',
    model: 'XC60',
    year: 2020,
    color: 'Blue',
    price: 40000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Lexus',
    model: 'RX',
    year: 2021,
    color: 'Black',
    price: 50000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Land Rover',
    model: 'Range Rover Evoque',
    year: 2022,
    color: 'Gray',
    price: 60000,
    amount: 1,
    isSportCar: false,
    type: 'SUV',
  },
];

/* {
  brand: 'Land Rover',
  model: 'Range Rover Evoque',
  year: 2022,
  color: 'Gray',
  price: 60000,
  amount: 1,
  isSportCar: false,
  type: 'SUV',
}, */

// const result = cars
//   .toSorted((b, a) => {
//     return a.isSportCar - b.isSportCar;
//   })
//   .toSorted((a, b) => {
//     return a.model.localeCompare(b.model);
//   })
//   .toSorted((a, b) => {
//     return a.brand.localeCompare(b.brand);
//   });

// console.table(result);

// const result = cars.toSorted((a, b) => {
//   return a.price - b.price;
// });

// console.table(result);
