//* _.isEmpty() - пустая ли сущность

console.log('_.isEmpty({}) -', _.isEmpty({}));
console.log('_.isEmpty({ a: 1 }) -', _.isEmpty({ a: 1 }));

console.log('-------------------');

//* _.get(object, path, [defaultValue]) - если нет свойства возврю undefined
// -------------------- defaultValue - необязательный параметр

const user = {
  name: 'mango',
  location: {
    city: 'Lviv',
  },
};

console.log(_.get(user, 'location.city')); // если нет свойства будет undefined

console.log(user.location.city); // если нет свойства будет ошибка

if (user && user.location && user.location.city) {
  console.log(user.location.city); // проверка на свойство без lodash
}

console.log(user?.location?.city); // современный аналог js

console.log('-------------------');

//* _.union() - создает массив уникальных значений

console.log('_.union - ', _.union([1, 2, 3], [3, 4, 5]));

console.log('-------------------');

//* _.range([start=], end, [step=1) - создает массив значений от...до

console.log('_.range -', _.range(10, 21));

console.log('-------------------');

//* _.sortBy(collection, [iteratees=[_.identity]])

const users = [
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];

console.log(_.sortBy(users, user => user.age)); //аналог нижнему
console.log(_.sortBy(users, ['user', 'age'])); //аналог верхнему

console.log('-------------------');

//* sum() и sumBy()

console.log('_.sum -', _.sum([1, 2, 3, 4, 5, 6])); // суммирует значения массива

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

console.log(
  '_.sumBy -',
  _.sumBy(players, player => player.timePlayed), // суммирует свойства в обекте
);

console.log('-------------------');

//* min() и max()
//* minBy() и maxBy()

console.log(
  '_minBy() -',
  _.minBy(players, player => player.timePlayed),
);

console.log('-------------------');

//* camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()

console.log(_.kebabCase(' a b c '));

console.log('-------------------');

//* uniq() и uniqBy() - поиск уникального значения
//* sortedUniq() и sortedUniqBy()

//* random()
