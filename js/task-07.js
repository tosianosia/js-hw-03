/*
 * Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
 * в котором необходимо реализовать методы для работы с балансом и историей
 * транзакций.
 */

/*
 * Типов транзакций всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const { transactions } = this;
    const transaction = {
      id: transactions.length + 1,
      amount,
      type,
    };

    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const { transactions } = this;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

    transactions.push(transaction);
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы невозможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('На вашем счёте недостаточно средств!');
      return;
    }

    const { transactions } = this;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

    transactions.push(transaction);
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Текущий баланс: ${this.balance}`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    const { transactions } = this;

    for (const transaction of transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    const { transactions } = this;
    let transactionTotal = 0;

    for (const transaction of transactions) {
      if (transaction.type === type) {
        transactionTotal += transaction.amount;
      }
    }

    return transactionTotal;
  },
};

account.deposit(5000);
account.deposit(700);

console.log(account.getBalance());

account.withdraw(1500);
account.withdraw(7000);

console.log(account.getBalance());

console.log(account.getTransactionDetails(3));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
