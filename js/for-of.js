const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends);
const lastIndex = friends.length - 1;

for (let i = 0; i >= lastIndex; i += 1) {
  console.log(friends[i]); //значения массива
}

for (let i = 0; i < friends.length; i += 1) {
  friends[i] += '-1';
}
console.table(friends);

for (const friend of friends) {
  console.log(friend);
}

console.log('--------------------');

// *** посчитать общую сумму *** /

const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   total += cart[i];
// }
// console.log('Total: ', total);

for (const value of cart) {
  total += value;
}
console.log('Total: ', total);

console.log('--------------------');

// *** Скрипт подсчитывающий сумму всех четных чисел в массиве. *** /

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total1 = 0;

//-------------------for----------------
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     console.log('четное - ', numbers[i]);
//     total1 += numbers[i];
//   }
// }
// console.log('Total: ', total1);

//-----------------for...of-------------

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     console.log('четное - ', number);
//     total1 += number;
//   }
// }
// console.log('Total: ', total1);

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     console.log('не четное', number);
//     continue;
//   }
//   total1 += number;
// }
// console.log('Total: ', total1);

console.log('--------------------');

// *** Скрипт поиска самого маленького числа ( числа не повторяются) *** /

const array = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = array[0];

for (const number of array) {
  console.log(number);
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
console.log('smallestNumber -', smallestNumber);

console.log('---------------------');
