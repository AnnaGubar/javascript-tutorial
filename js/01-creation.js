//* Достучаться до значения ключа, добавление-перезапись

const playList = {
  name: 'мой плейлист',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
};

console.log(playList);
console.log(playList.name); // мой плейлист
console.log(playList['name']); // мой плейлист

const propertyName = 'tracks';
console.log(playList.propertyName); // undefined
console.log(playList[propertyName]); // ['track-1', 'track-2', 'track-3']

playList.qwe = 5;
playList.rating = 10;

console.log(playList); // {... rating: 10, ... qwe: 5}

console.log('--------------------');

//* Короткая запись свойств

const username = 'Mango';
const email = 'mango@email.com';

// const signupData = {
//   username: username,
//   email: email,
// };

const signupData = {
  username,
  email,
};

console.log(signupData); // {username: 'Mango', email: 'mango@email.com'}

console.log('--------------------');

//* Вычисляемые свойства

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

console.log(colorPickerData); // {color: 'tomato'}

console.log('--------------------');

//* Вычисляемые свойства (добавление ключа:значения)

const day = {
  name: 'Sunday',
  date: 12,
};

const addProps = function (obj, key, value) {
  //происходит мутация обьекта-оригинала

  // obj[key] = value;
  // return obj;

  //делает копию и не мутирует оригинал

  return {
    ...obj,
    [key]: value,
  };
};

const updateDay = addProps(day, 'week', 3);
console.log(updateDay); // {name: 'Sunday', date: 12, week: 3}

console.log('--------------------');

const cat1 = 'mouse';
const cat2 = 'lion';

const cats = {
  cat1: {
    legs: 4,
  },
  [cat1]: {
    legs: 4,
  },
  [cat2]: {
    legs: 5,
  },
};

console.log(cats);

console.log('--------------------');

//* Вывести последнее свойство обьекта

const obj = {
  key: ['first', 'second', 'third'],
};

console.log(obj.key[obj.key.length - 1]);

console.log('--------------------');
