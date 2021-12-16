const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter(number => number < 10 || number > 20);
console.log(filteredNumbers);

console.log('-------------------');

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

//*  массив онлайн игроков

const onlinePlayers = players.filter(({ online }) => online);
console.table(onlinePlayers);

//* массив оффлайн игроков

const offlinePlayers = players.filter(player => !player.online);
console.table(offlinePlayers);

//* список игроков с timePlayed больше 250

const hardcorePlayers = players.filter(player => player.timePlayed > 250);
console.table(hardcorePlayers);

console.log('-------------------');

//* массив с уникальными значениями

const array = [
  'математика',
  'физика',
  'информатика',
  'математика',
  'физика',
  'биология',
];

const uniqueCourses = array.filter(
  (course, index, array) => array.indexOf(course) === index,
);

console.log(uniqueCourses);

console.log('-------------------');

//* Реализация метода filter

const filterByPrice = player => player.points > 50;

const filteredArray = (array, cb) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const isSelected = cb(array[i], i, array);

    if (isSelected) {
      result.push(array[i]);
    }
  }
  return result;
};

console.log(filteredArray(players, filterByPrice));
