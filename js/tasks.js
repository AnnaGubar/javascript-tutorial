//* Как быстро очистить массив

const fruits = [
  'banana',
  'apple',
  'orange',
  'watermelon',
  'apple',
  'orange',
  'grape',
  'apple',
];

fruits.length = 0;
console.log(fruits); // []

console.log('---------------');

//* Как объединить более двух массивов

const fruits1 = ['apple', 'banana', 'orange'];
const meat = ['poultry', 'beef', 'fish'];
const vegetables = ['potato', 'tomato', 'cucumber'];
const food = [...fruits1, ...meat, ...vegetables];
console.log(food);

console.log('---------------');

//*Как получить рандомное значение массива

const fruits2 = [
  'banana',
  'apple',
  'orange',
  'watermelon',
  'apple',
  'orange',
  'grape',
  'apple',
];
const randomFruit = fruits2[Math.floor(Math.random() * fruits2.length)];
console.log(randomFruit);
