//* сумма эл-ов массива

const cart1 = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
const cart2 = [50, 78, 12, 25, 90];

const calculateTotal = function (items) {
  let total = 0;
  for (const item of items) {
    total += item;
  }
  return total;
};

console.log(calculateTotal(cart1));
console.log(calculateTotal(cart2));

console.log('---------------------');

//* перебор и логирование массива

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);

console.log('---------------------');

//* поиск логина

const logins = ['sddfg5', 'asefdgh', '4516s', 'rgfd51'];

// const findLogin = function (allLogins, loginToFind) {
//   let message = 'Пользователь не найден';
//   for (const login of logins) {
//     if (login === loginToFind) {
//       message = 'Пользователь найден';
//     }
//   }

//   return message;
// };

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return 'Пользователь найден';
//     }
//   }

//   return 'Пользователь не найден';
// };

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? 'Пользователь найден'
    : 'Пользователь не найден';
};

console.log(findLogin(logins, 'asefdgh'));
console.log(findLogin(logins, 'thrg8'));

console.log('---------------------');

//* поиск меньшего числа

const numbers1 = [51, 18, 13, 24, 7, 85, 19];
const numbers2 = [8, -5, 0, 1, 7, 85];
const findSmallestNumber = function (numbers) {
  let smallestNumber = numbers[0];
  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }

  return smallestNumber;
};

console.log('Smallest number -', findSmallestNumber(numbers1));
console.log('Smallest number -', findSmallestNumber(numbers2));

console.log('---------------------');

//* инверсия регистра

const toInvertString = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};

console.log('invertedString:', toInvertString('GdDHGFGghdhfHD'));
console.log('invertedString:', toInvertString('dDfKKK'));

console.log('---------------------');
