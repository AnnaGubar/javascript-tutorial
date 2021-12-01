//* Array.from
// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);
//   console.log(args);
// };

//* ...rest
const fn = function (...args) {
  console.log(args);
};

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);

console.log('---------------------');

const fn1 = function (a, b, c, ...args) {
  console.log(a, b, c);
  console.log(args);
};

fn1(1, 2, 3);
fn1(1, 2, 3, 4, 5);
fn1(1, 2, 3, 4, 5, 6, 7);

console.log('---------------------');

//* сложение произвольного колличества аргументов (чисел)

const add = function (...args) {
  console.log(args);

  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5));

console.log('---------------------');

//* функ-я должна вернуть новый массив, в котором будут только те аргументы
//* (начиная со второго) для которых есть аналог в оригинальном массиве

const filterNumbers = function (array, ...args) {
  console.log('array', array);
  console.log('args', args);

  const uniqueElements = [];

  for (const el of array) {
    console.log(el);
    if (args.includes(el)) {
      uniqueElements.push(el);

      console.log(`${el} есть везде`);
    }
  }
  return uniqueElements;
};

console.log(filterNumbers([1, 2, 3, 4], 10, 12, 2, 3));
console.log(filterNumbers([10, 20, 30], 23, 30, 56, 51));
console.log(filterNumbers([400, 850, 770, 560, 840], 2, 8, 56, 78, 62));

console.log('---------------------');
