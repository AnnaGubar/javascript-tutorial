const num = [4, 5, 6, 20, 8, 62];

const doubleNum = num.map(function (num) {
  return num * 2;
});

console.log(doubleNum);

console.log('-------------------');

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

console.table(players);

const playersId = players.map(player => player.id);
console.log(playersId);

// const res = players.map(player => {
//   return {
//     name: player.name,
//     online: player.online,
//   };
// });

//----------------------- короткая запись
const res = players.map(({ name, online }) => ({ name, online }));
// { name: name, online: online }

console.log(res);

const updatedPlayers = players.map(player => {
  return {
    ...player,
    points: player.points * 10,
  };
});

console.log(updatedPlayers);

//* изменение одного свойства

const findId = 'player-2';

// const findPlayer = players.map(player => {
//   if (findId === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 1000,
//     };
//   }
//   return player;
// });

//-------------------------- короткая запись
const findPlayer = players.map(player =>
  findId === player.id
    ? { ...player, timePlayed: player.timePlayed + 1000 }
    : player,
);

console.table(findPlayer);
