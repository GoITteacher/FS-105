/**
 * Метод filter
 *
 * - Поелементно перебирає оригінальний массив
 * - Повертає новий масив (з елементами або порожній)
 * - Додає в масив, що повертається, елементи, які задовольняють умові коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */

// const numbers = [1, 4, 5, 6, 2, 2, 2, 4, 6, 7, 3, 2, 2, 5, 212, 4, 6];

// const filteredNumbers1 = numbers.filter(el => el % 2 === 0);
// const filteredNumbers2 = numbers.filter(el => el > 10);
// const filteredNumbers3 = numbers.filter((el, i) => el > i);
// const filteredNumbers4 = numbers.filter((el, i) => el > i && el < 50);
// const filteredNumbers5 = numbers.filter(el => el === 2);

// console.log(filteredNumbers5);

/**
 * ---------------------------
 */
const allCars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/**
 * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
 * значення параметра threshold.
 */

/* 
{
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  }
*/

// const filterByPrice = (cars, threshold) => {
//   const result = cars.filter((car, i, arr) => {
//     return car.price < threshold;
//   });
//   return result;
// };

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(car => car.price < threshold);
// };

// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

/**
 * Нехай функція getCarsWithDiscount повертає масив автомобілів
 * властивість onSale яких true.
 */

//  {
//   make: 'Honda',
//   model: 'CR-V',
//   type: 'suv',
//   amount: 14,
//   price: 24045,
//   onSale: true,
// }

// const getCarsWithDiscount = cars => {
//   return cars.filter(car => car.onSale);
// };

// console.table(getCarsWithDiscount(allCars));

/**
 * Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
 * зі значенням параметра type.
 */

// const getCarsWithType = (cars, type) => {
//   return cars.filter(car => car.type === type);
// };

// console.table(getCarsWithType(allCars, 'suv'));
// console.log(getCarsWithType(allCars, 'test'));
// console.table(getCarsWithType(allCars, 'sedan'));

//!===============================================================
