//* index, array - необязательные параметры

const num = [4, 5, 6, 20, 8, 62];

num.forEach(function (num, index, array) {
  console.log('number', num);
});

console.log(num);

console.log('-------------------');

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Не произошло мутации исходных данных
console.log(numbers); // [1, 2, 3, 4, 5]
// Функция вернула новый массив с изменёнными данными
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

console.log('-------------------');

//* К четным добавляем value и возвр. массив

function changeEven(numbers, value) {
  const x = [];

  numbers.forEach(number =>
    number % 2 === 0 ? x.push(number + value) : x.push(number),
  );
  return x;
}

console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]
