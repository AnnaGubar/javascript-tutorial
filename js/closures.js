//* возвращаемая функ-я имеет доступ ко всем локальным переменным родительской функ-ии

const fnA = function (parameter) {
  const inner = 'значение внутр. переменной функ-и fnA';

  const innerFunction = function () {
    console.log(parameter);
    console.log(inner);
    console.log('вызов innerfunction');
  };

  return innerFunction;
};

const fnB = fnA(555);

fnB();

console.log(fnB);

console.log('--------------------');

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} cooks ${dish}`);
  };

  return makeDish;
};

const mango = makeSheff('Mango'); // передает аргумент NAME

console.log(mango);

mango('soup'); // передает аргумент DISH
mango('pasta');

const poly = makeSheff('Poly');

poly('coffee');
poly('pasta and soup');

console.log('--------------------');

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const num1 = rounder(2);
const num2 = rounder(1);

console.log(num1(3.562));
console.log(num2(3.562));
