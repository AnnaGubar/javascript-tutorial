const doMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

doMath(10, 5, add); //15
doMath(10, 5, sub); //5

console.log('--------------------');

//* Метод filter

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    // console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
};

const callback1 = function (value) {
  return value >= 3;
};

console.log(filter([1, 2, 3, 4, 5], callback1));
console.log(
  filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (value) {
    return value <= 4;
  }),
);

console.log('--------------------');

//* Callback в обьекте и переиспользование fn filter

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruit = function (fruit) {
  return fruit.quantity >= 120;
};

console.log(filter(fruits, getFruit));

console.log('--------------------');

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, ok, onOrderError) {
    for (const x of this.pizzas) {
      if (x === pizzaName) {
        return ok(pizzaName);
      }
    }

    return onOrderError(pizzaName);
  },
};

function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

function onOrderError(error) {
  return `Ошибка! В ассортименте нет пиццы с названием ${error}.`;
}

console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
console.log(pizzaPalace.order('Венская', makePizza, onOrderError));
