// *** Скрипт обьединяющий все эл-ты массива в одно строковое значение *** /

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

const string = friends.join(', ');
console.log(string);

console.log('---------------------');

// *** SLUG из Url названия статьи (только буквы и пробелы) *** /

const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);
