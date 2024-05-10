/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

class User {
  #login;
  #email;

  constructor(obj) {
    this.#login = obj.login;
    this.#email = obj.email;
  }

  get login() {
    return this.#login;
  }
  set login(value) {
    this.#login = value;
  }

  get email() {
    return this.#email;
  }
  set email(value) {
    this.#email = value;
  }
}

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie
