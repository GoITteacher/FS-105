/**
 * Ланцюжки методів
 */
// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(el => el > 2);
// const multByThree = greaterThenTwo.map(el => el * 3);
// const sorted = multByThree.toSorted((a, b) => a - b);
// console.log(sorted);

// const sortedByChaining = numbers
//   .filter(el => el > 2)
//   .map(el => el * 3)
//   .toSorted((a, b) => a - b);

// console.log(sortedByChaining);
//!===============================================================

// const numbers = [1, 2, 3, 4, 4, 1, 1, 2, 3, 5, 5, 3, 234, 5, 2];

// const result = numbers
//   .filter(el => el % 2 === 0)
//   .map((el, i, myArray) => {
//     return el * myArray.length;
//   });

// console.log(result);

//!===============================================================

/**
 * -------------------------------------
 */
const allCars = [
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

/**
 * Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
 * але тільки тих, які зараз на розпродажі.
 */
const getModelsOnSale = cars => {
  return cars.filter(car => car.onSale).map(car => car.model);
};

// console.table(getModelsOnSale(allCars));

/**
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів
 * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
 */
const getSortedCarsOnSale = cars => {
  let count = 0;
  const result = cars

    .toSorted((a, b) => {
      count++;
      return a.price - b.price;
    })
    .filter(car => {
      count++;
      return car.onSale;
    });

  return result;
};
getSortedCarsOnSale(allCars);
// console.table();

//!===============================================================

// const arr = [
//   [1, 4, 5, 1, 2, 3, 45, 5, 52, 1],
//   [1, 4, 5, 1],
//   [1, 4, 5, 1, 2, 3, 45, 5, 52, 1],
//   [1, 4, 5, 1],
//   [1, 4, 5, 1, 2, 3, 45, 5, 52, 1],
//   [1, 4, 5, 1, 2, 3, 45, 5, 52, 1],
//   [1, 4, 5, 1],
// ];

// const result = arr.filter(arr => arr.length > 7);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].filter(el => el > 10);
// }

// console.log(arr);
