const numbers = [4, 8, 45, 54, 5];

// const total = numbers.reduce((acc, number) => {
//   console.log('number', number);
//   console.log('acc', acc);

//   return acc + number;
// }, 0);

const total = numbers.reduce((acc, number) => acc + number, 0); //короткая запись

console.log(total);

console.log('---------------------');

//* Считаем общую зарплату

const salary = {
  mango: 100,
  poly: 555,
  ajax: 890,
};

const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
);

console.log(totalSalary);

console.log('---------------------');

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

//* Считаем общее количество часов

const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0,
);

console.log(totalTimePlayed);

console.log('---------------------');

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

//* Собираем все теги из твитов

const allTags1 = tweets.reduce((tags, tweet) => {
  tags.push(tweet.tags);
  return tags;
}, []);

console.log(allTags1); // результат массив массивов

const allTags2 = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags2); // результат массив

console.log('---------------------');

//* Ведём статистику тегов

const tagsStats = allTags2.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});

console.log(tagsStats);

console.log('---------------------');

//* Реализация метода reduce

const callback = (x, tweet) => {
  console.log(x + tweet.likes);
  return x + tweet.likes;
};

const reduce = (array, cb, value) => {
  let acc = value ?? array[0];
  // let acc = value ? value : array[0]; // ????????
  const index = value || value === 0 ? 0 : 1;

  for (let i = index; i < array.length; i++) {
    acc = cb(acc, array[i], i, array);
  }

  return acc;
};

console.log(reduce(tweets, callback, 0));

console.log('---------------------');

const playersF = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(playersF);
console.log(playtimes);

const totalPlayTime = playtimes.reduce((x, nextX) => {
  return x + nextX;
}, 0);
console.log(totalPlayTime);

const averagePlayTime = totalPlayTime / playtimes.length;
console.log(playtimes.length);
console.log(averagePlayTime);

console.log('---------------------');

const playersS = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = playersS => {
  const t = playersS.reduce((x, nextX) => {
    const y = x + nextX.playtime;
    return y / nextX.gamesPlayed;
  }, 0);
  return t;
  // return t / ;
};
console.log(totalAveragePlaytimePerGame(playersS)); // 1023

console.log('---------------------');

const z = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

const calculateTotalBalance = users => {
  const r = users.reduce((x, y) => {
    return x + y.friends.length;
  }, 0);
  return r;
};

console.log(calculateTotalBalance(z)); // 14
