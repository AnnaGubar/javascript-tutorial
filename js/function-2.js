//* вернуть индекс и значения массива

const fruits = ['apple', 'peach', 'pear', 'banana'];

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

console.log(lastElementIndex); // 3
console.log(lastElement); //' banana'

console.log('----------------------');

//* вернуть крайние эл-ты массива
//['apple', 'banana'];

function getExtremeElements(array) {
  return [array[0], array[array.length - 1]];
}

console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

console.log('----------------------');

//* вернуть массив слов из строки

function splitMessage(message, delimeter) {
  return message.split(delimeter);
}

console.log(splitMessage('Mango hurries to the train', ' '));
console.log(splitMessage('best_for_week', '_'));

console.log('----------------------');

//* подсчет стоимости слов в строке

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
}

console.log(calculateEngravingPrice('JavaScript is in my blood', 10)); //50
console.log(calculateEngravingPrice('JavaScript is in my blood', 20)); //100

console.log('----------------------');

//* slug

function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}

console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

console.log('----------------------');

//* slice()

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];

console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']

console.log('----------------------');

//* concat() slice()

function makeArray(firstArray, secondArray, maxLength) {
  return firstArray.concat(secondArray).slice(0, maxLength);
}

console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 3)); //["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); //[]

console.log('----------------------');

//* самое длинное слово в строке

// function findLongestWord(string) {
//   const array = string.split(' ');

//   // console.log(x);

//   let wordIndex = 0;
//   let wordValue = '';

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > wordIndex) {
//       wordIndex = array[i].length;
//       // console.log(wordIndex, array[i]);
//       wordValue = array[i];
//       // console.log(wordValue);
//     }
//   }

//   return wordValue;
// }

// function findLongestWord(string) {
//   const str = string.split(' ');
//   let longStr = '';

//   for (let i = 0; i < str.length; i++) {
//     if (longStr.length < str[i].length) {
//       longStr = str[i];
//     }
//   }

//   return longStr;
// }

function findLongestWord(string) {
  const str = string.split(' ');
  let longStr = '';

  for (const word of str) {
    if (word.length > longStr.length) {
      longStr = word;
    }
  }

  return longStr;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); //jumped
console.log(findLongestWord('Google do a roll')); //Google

console.log('----------------------');

//* создает массив чисел в диапазоне min - max   ---- push()

function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  return numbers;
}

console.log(createArrayOfNumbers(14, 17)); //[14, 15, 16, 17]
console.log(createArrayOfNumbers(29, 34)); //[29, 30, 31, 32, 33, 34]

console.log('----------------------');

//* фильтрация массива чисел

function filterArray(numbers, value) {
  const newArray = [];

  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }
  return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]

console.log('----------------------');

//* includes()

// function getCommonElements(array1, array2) {
//   const commonNumbers = [];

//   for (const n1 of array1) {
//     for (const n2 of array2) {
//       if (n1 === n2) {
//         commonNumbers.push(n1);
//       }
//     }
//   }
//   return commonNumbers;
// }

function getCommonElements(array1, array2) {
  const commonNumbers = [];

  for (const n1 of array1) {
    if (array2.includes(n1)) {
      commonNumbers.push(n1);
    }
  }

  return commonNumbers;
}

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]

console.log('----------------------');

//* массив четных чисел

function getEvenNumbers(start, end) {
  const numbers = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      numbers.push(i);
    }
  }

  return numbers;
}

console.log(getEvenNumbers(8, 8)); //[8]
console.log(getEvenNumbers(7, 7)); //[]
console.log(getEvenNumbers(6, 12)); //[6, 8, 10, 12]

console.log('----------------------');
