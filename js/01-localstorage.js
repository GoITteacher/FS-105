//!===============================================================

// const user = {
//   age: 10,
//   name: 'Volodka',
//   city: 'Dnipro',
//   test() {},
//   test2: undefined,
// };

// const zip = user.toString();
// const zip = JSON.stringify(user);

// console.log(zip);

/* const str = `{"update_id": 936365413,"message": {"message_id": 1702107,
   "from": {
    "id": 433982686,
    "is_bot": false,
    "first_name": "Volodymyr",
    "username": "pashchenko_v_r",
    "language_code": "uk"
   },
   "chat": {
    "id": 433982686,
    "first_name": "Volodymyr",
    "username": "pashchenko_v_r",
    "type": "private"
   },
   "date": 1717002831,
   "text": "message"
  }
 }`; */

// const data = JSON.parse(str);

// console.log(data);

//!===============================================================
// JSON.stringify(data)

// const x = [1, 2, 3, 5, undefined, 1, 2, 4, 45];
// const data = JSON.stringify(x);
// console.log(x, data);

//!===============================================================
// JSON.parse(jsonStr)

// const str = prompt('Enter your json data');
// const data = JSON.parse(str);
// console.log(data);

//!===============================================================

// console.log('start');

// try {
//   console.log(x);
// } catch (err) {
//   console.log(err);
// }

// console.log('end');

//!===============================================================

// const str = prompt('Enter your json data');

// try {
//   const data = JSON.parse(str);
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

//!===============================================================
/**
 * LocalStorage
 */

// localStorage.setItem('param8', 'Hello param8');
// localStorage.setItem('userName', 'Volodka');
// localStorage.setItem('param3', '123123123123');

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */
const user1 = {
  name: '123123',
  age: 123,
  friend: [12, 12, 3, 1, 2, 4, 1],
};
const user2 = {
  name: '123123',
  age: 123,
  friend: [12, 12, 3, 1, 2, 4, 1],
};
const user3 = {
  name: '123123',
  age: 123,
  friend: [12, 12, 3, 1, 2, 4, 1],
};
const user4 = {
  name: '123123',
  age: 123,
  friend: [12, 12, 3, 1, 2, 4, 1],
};
const user5 = {
  name: '123123',
  age: 123,
  friend: [12, 12, 3, 1, 2, 4, 1],
};

/* localStorage.setItem('user1', JSON.stringify(user1));
localStorage.setItem('user2', JSON.stringify(user2));
localStorage.setItem('user3', JSON.stringify(user3));
localStorage.setItem('user4', JSON.stringify(user4));
localStorage.setItem('user5', JSON.stringify(user5)); */

// saveToLS('user1', user1);
// saveToLS('user2', user2);
// saveToLS('user3', user3);
// saveToLS('user4', user4);
// saveToLS('user5', user5);

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

const data1 = loadFromLS('user1');
const data2 = loadFromLS('user2');
const data3 = loadFromLS('user3');
const data4 = loadFromLS('user4');

/**
 * Видалення
 */

// for (let i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.key(i));
// }

// localStorage.removeItem('param1');
// localStorage.removeItem('param2');
// localStorage.removeItem('param3');
// localStorage.removeItem('param4');
// localStorage.removeItem('param5');
// localStorage.removeItem('param7');
// localStorage.removeItem('awdawdawd');

// localStorage.clear();

/**
 * LocalStorage не може зберігати функції
 */

//!===============================================================

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
