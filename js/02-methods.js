/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

//! ==================================================

// const nanoid = {
//   x: 10,
//   getX() {},
//   getY() {},
//   sayHello() {},
// };

// const dog = {
//   name: 'Lord',
//   age: 5,
//   weight: 30,
//   height: 60,
//   breed: 'Spaniel',

//   sleep() {
//     console.log('Woof Woof');
//     console.log('Zzzzzzzz');
//   },
//   sayWoof() {
//     console.log('WOOF');
//   },
//   eat() {
//     console.log('Дякую хозяін');
//   },
// };

// console.log(dog.name);
// console.log(dog.age);

// dog.sayWoof();
// dog.sayWoof();
// dog.eat();

//! ==================================================

// const brother = {
//   name: 'Valera',
//   age: 20,
//   city: 'Dnipro',

//   goToWater() {
//     console.log('Давай гроші');
//     console.log('Ключі від авто');
//     console.log('ПОЇХАВ');
//     console.log('....');
//     console.log('ПОВЕРНУВСЯ');
//   },

//   sum(x, y) {
//     console.log(x + y);
//   },
// };

// brother.sum(10, 20);

//! ==================================================
// const dog = {
//   name: 'Lord',
//   location: {
//     setLocation() {},
//   },
// };
// const dog1 = {
//   name: 'Lord',
//   age: 'Lord',

//   changeName(newName) {
//     this.name = newName;
//   },
// };

// dog.changeName('Lord2');

// console.log(dog);

//! ==================================================

// const playlist = {
//   name: 'My amazing playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],

//   changeName(newName) {
//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },

//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// console.log(playlist.getTrackCount());

// playlist.changeName('Disco 90-s');
// console.log(playlist);

// playlist.addTrack('new track 1');
// console.log(playlist.getTrackCount());

// playlist.addTrack('new track 2');
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);
