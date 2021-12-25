/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

const Car = function ({ brand, model, price } = {}) {
  // const { brand, model, price } = config;
  // 2. Функция вызывается в контексте созданного объекта,
  //    то есть в this записывается ссылка на него
  this.brand = brand;
  this.model = model;
  this.price = price;

  // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
  //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

  // 4. Ссылка на обьект возвращается в место вызова new Car
};

Car.prototype.sayHi = function () {
  console.log('Car.prototype.sayHi -> this', this);
  console.log('Hello :) ');
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

// console.log(Car.prototype);

// 1. Если функция вызывается через new, создаётся пустой объект
// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(10000);

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
// console.log(myCar3);

// myCar3.sayHi();

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

console.log(User.prototype);

User.prototype.changeEmail = function (newMail) {
  this.email = newMail;
};

const mango = new User({ email: 'mango@mail.com', password: 1111111 });

mango.changeEmail('my-new-mail@mail.com');
// console.log(mango);

/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */

User.message =
  'Я статическое свойство, меня нет на экземплярах или в прототипе.';

User.logInfo = function (obj) {
  console.log('User.logInfo -> obj', obj);
  console.log('Почта: ', obj.email);
  console.log('Пароль: ', obj.password);
};

User.logInfo(mango);

// Object.keys()
// Object.value()

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()

console.log('------------------------------');

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value = this.value + str;
  }
  padStart(str) {
    this.value = str + this.value;
  }
  padBoth(str) {
    this.value = str + this.value + str;
  }
}

// Change code above this line
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

console.log('------------------------------');
{
  class Car {
    // Change code below this line
    static MAX_PRICE = 50000;
    #price;

    constructor({ price }) {
      this.#price = price;
    }

    get price() {
      return this.#price;
    }

    set price(newPrice) {
      if (newPrice <= Car.MAX_PRICE) {
        this.#price = newPrice;
      }
    }
    // Change code above this line
  }

  const audi = new Car({ price: 35000 });
  console.log(audi.price); // 35000

  audi.price = 49000;
  console.log(audi.price); // 49000

  audi.price = 51000;
  console.log(audi.price); // 49000
}

console.log('------------------------------');
