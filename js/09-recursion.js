//* Подсчитать факториал методом рекурсии

const factorial = function (n) {
  if (n === 1) {
    return n;
  }

  // console.log(`n before: ${n}`);

  const res = n * factorial(n - 1); //подвисает и ждет полного выполнения
  //            ⬆  5*4*3*2
  console.log(`n after: ${n}`);

  return res;
};

console.log('factorial:', factorial(5)); // 5! = 1*2*3*4*5 = 120

console.log('-----------------------------');

//* рекурсия через замыкание

const square = x => {
  return y => {
    return x * y;
  };
};

console.log('square:', square(10)(20));

//можно поделить функционал: допустим, x - ширина, y - высота

const width = square(15); // x
console.log('new square:', width(12)); // добавили параметр y

const add = initialValue => {
  let result = initialValue; //аккумулятор значений

  const addRecursive = value => {
    if (!value) return result; //если нет значения - вернуть предыдущий результат

    result += value;

    return addRecursive;
  };

  return addRecursive;
};

const res = add(1)(2)(3)(333)();
console.log(res);
