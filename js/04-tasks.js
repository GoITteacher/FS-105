/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const TYPE = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    const obj = {
      id: Math.random(),
      type,
      amount,
    };
    return obj;
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    if (this.amount <= 0) return;
    this.balance += amount;
    const transaction = this.createTransaction(amount, TYPE.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (this.balance < amount && amount < 0) return;
    this.balance -= amount;
    const transaction = this.createTransaction(amount, TYPE.WITHDRAW);
    this.transactions.push(transaction);
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id === id) {
        return item;
      }
    }
    return null;
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    const result = [];
    for (let item of this.transactions) {
      if (item.type === type) {
        result.push(item);
      }
    }
    return result;
  },
};

// console.log(account);

// account.deposit(100);
// account.deposit(500);
// account.withdraw(200);
// account.deposit(1000);
// account.deposit(500);
// console.log(account.getBalance());
// console.log(account.getTransactionTotal(TYPE.WITHDRAW));

const products = [
  { title: 'product-1', price: 100, amount: 20 },
  { title: 'product-2', price: 200, amount: 5 },
  { title: 'product-3', price: 50, amount: 15 },
  { title: 'product-4', price: 100, amount: 20 },
  { title: 'product-5', price: 100, amount: 20 },
  { title: 'product-6', price: 100, amount: 20 },
  { title: 'product-7', price: 100, amount: 20 },
  { title: 'product-8', price: 100, amount: 20 },
  { title: 'product-9', price: 100, amount: 20 },
];

function getTotal(productName) {
  for (const product of products) {
    if (product.title === productName) {
      return product['price'] * product['amount'];
    }
  }
}
