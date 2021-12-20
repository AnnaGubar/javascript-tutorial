const propName = 'name';
const price = 2500;

const product = {
  [propName]: 'Генри Сибола',
  price,
};

console.log(product);

console.log('--------------------');

//* КУДА.push(ЧТО)

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (const x in apartment) {
  keys.push(x); // Ключ
  values.push(apartment[x]); // Значение свойства с таким ключом
}

console.log(keys);
console.log(values);

console.log('--------------------');

//*   obj.hasOwnProperty(key)

const keys1 = [];
const values1 = [];

const advert = {
  service: 'apt',
};

const apartment1 = Object.create(advert);

apartment1.descr = 'Spacious apartment in the city center';
apartment1.rating = 4;
apartment1.price = 2153;

for (const key in apartment1) {
  if (apartment1.hasOwnProperty(key)) {
    keys1.push(key); // key
    values1.push(apartment1[key]); // value
  }
}

console.log(keys1);
console.log(values1);

console.log('--------------------');

//*           For...in   .hasOwnProperty()

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

function countProps(object) {
  return Object.keys(object).length;
}

console.log(countProps({})); //0
console.log(countProps({ name: 'Mango', age: 2 })); //2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); //3

console.log('--------------------');

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors);

console.log('--------------------');

//* Поиск по наименованию

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const prod of products) {
    // console.log(prod.name);
    // console.log(prod.price);
    if (prod.name === productName) {
      return prod.price;
    }
  }
  return null;
}

console.log(getProductPrice('Droid')); //400
console.log(getProductPrice('Drobid')); //null

console.log('--------------------');

//* Создаем массив свойст по ключу

const products4 = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const array = [];

  for (const item of products4) {
    if (!item[propName]) {
      return [];
    }
    array.push(item[propName]);
  }
  return array;
}

console.log(getAllPropValues('name'));
console.log(getAllPropValues('quantity'));
console.log(getAllPropValues('price'));
console.log(getAllPropValues('category'));

console.log('--------------------');

//* Расчеты по свойсту

const products5 = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  for (const item of products5) {
    if (item.name === productName) {
      return item.price * item.quantity;
    }
  }
  return 0;
}

console.log(calculateTotalPrice('Blaster')); //0
console.log(calculateTotalPrice('Radar')); //5200
console.log(calculateTotalPrice('Scanner')); //8100

console.log('--------------------');

//*

function findMatches(array, ...args) {
  const matches = [];

  for (const arr of array) {
    for (const arg of args) {
      if (arr === arg) {
        matches.push(arr);
      }
    }
  }

  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

console.log('--------------------');

//* Поиск и замена эл в массиве

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    return this.books.splice(bookIndex, 1, newName);
  },
};

console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));
console.log(bookShelf.updateBook('The last kingdom', 'Dune'));

console.log('--------------------');

//* удаление эл массива по аргументу

const atTheOldToad1 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const item = potions[i];

      if (potionName === item) {
        potions.splice(i, 1);
      }
    }
  },
};

console.log(atTheOldToad1.removePotion('Speed potion'));
// console.log(atTheOldToad1.removePotion('Dragon breath'));
console.log(atTheOldToad1.potions);

console.log('--------------------');

//* работа с коллекцией: удаление, добавление, обновление

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  getPotions() {
    // console.log(this.potions);
    return this.potions;
  },
  addPotion(newPotion) {
    for (const item of this.potions) {
      // console.log(item.name, '-', newPotion.name);
      if (item.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const item = this.potions[i];
      // console.log(item.name, '-', potionName);

      if (item.name === potionName) {
        this.potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (const item of this.potions) {
      if (item.name === oldName) {
        item.name = newName;
      }
    }
  },
};

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log(atTheOldToad.removePotion('Dragon breath'));
//[ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]
// console.log(atTheOldToad.removePotion('Speed potion'));
//[ { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }]
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
//[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// console.log(
//   atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'),
// );
//[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

// console.log(atTheOldToad.getPotions());

console.log('----------------------');

//* Напишите код для суммирования всех зарплат и сохраните его результат в переменной sum. Если объект salaries пуст, то результат должен быть 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

const values9 = Object.values(salaries);
console.log(values);

let total = 0;

for (const value of values9) {
  total += value;
}

console.log('for...of:', total);

const sum = values9.reduce((previousValue, element) => {
  return previousValue + element;
}, 0);

console.log('reduce:', sum);

//* Напишите ф-цию calcTotalPrice(stones, stonesName), которая принимает массив объектов и строку с названием камня. Функция считает м возвращает общую стоимость камней с таким именем, ценой и количеством из объекта

const stones = [
  { name: 'Изумруд', price: 1300, quantity: 4 },
  { name: 'Бриллиант', price: 2700, quantity: 6 },
  { name: 'Сапфир', price: 400, quantity: 7 },
  { name: 'Щебень', price: 150, quantity: 100 },
];

const calcTotalPrice = (stones, stonesName) => {
  const arrStones = stones.filter(value => {
    // console.log(value.name);
    return value.name === stonesName;
  });
  console.log(arrStones[0]);

  // return arrStones[0].price * arrStones[0].quantity;

  const { price, quantity } = arrStones[0];
  return price * quantity;
};

console.log(calcTotalPrice(stones, 'Сапфир')); // 2800

console.log('----------------------');

//* Создайте объект calculator с тремя методами read(a, b) - принимает два аргумента и сохраняет их как свойства объекта sum() возвращает сумму сохраненных значений mult() перемножает сохраненные значения и возвращает результат

const calculator = {
  read(a = 0, b = 0) {
    this.value1 = a;
    this.value2 = b;
  },
  sum() {
    // if (this.value1 === undefined && this.value2 === undefined) {
    //   return 0;
    // }
    // if (!this.value1) {
    //   this.value1 = 0;
    // }
    // if (!this.value2) {
    //   this.value2 = 0;
    // }

    return this.value1 + this.value2;
  },
  mult() {
    return this.value1 * this.value2;
  },
  devine() {
    return this.value1 && this.value2 ? this.value1 / this.value2 : 0;
  },
  pow() {
    return this.value1 && this.value2 ? this.value1 ** this.value2 : 0;
  },
};
console.log(calculator.read(3, 0));
console.log(calculator.sum());
console.log(calculator.mult());
console.log(calculator.devine());
console.log(calculator.pow());

console.log('----------------------');

//* Напишите функцию updateObject, которая принимает объект и возвращает новый объект без указанного параметра. Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}

const updateObject1 = (obj, objValue) => {
  const newObj = { ...obj }; // сделали копию

  console.log(obj === newObj);

  delete newObj[objValue]; // изменение копии
  return newObj;
};

console.log(updateObject1({ a: 1, b: 2 }, 'b'));

console.log('----------------------');

//* Напишите функцию updateObject, которая принимает объект и возвращает новый объект без указанных параметров

const updateObject = (obj, ...objValue) => {
  console.log(objValue);

  const newObj = { ...obj }; // сделали копию

  for (const value of objValue) {
    delete newObj[value]; // удаление каждого value
  }
  return newObj;
};

console.log(updateObject({ a: 1, b: 2, c: 3, d: 4 }, 'b', 'c'));

console.log('----------------------');
