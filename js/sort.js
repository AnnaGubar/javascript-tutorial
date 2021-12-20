const numbers = [1, 9, 6, 2, 3];

console.log('numbers', numbers.sort()); // [1, 2, 3, 6, 9]

const letters = ['b', 'B', 'a', 'A'];

console.log('letters', letters.sort()); // ['A', 'B', 'a', 'b']

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

numbers.sort((curEl, nextEl) => {
  return nextEl - curEl;
});

console.log(numbers); // [9, 6, 3, 2, 1]

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

const descSortedNumbers = [...numbers].sort((a, b) => b - a);
const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
console.log('descSortedNumbers', descSortedNumbers); // [9, 6, 3, 2, 1]
console.log('ascSortedNumbers', ascSortedNumbers); // [1, 2, 3, 6, 9]

//* Кастомная сортировка сложных типов

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

//*  По игровому времени
const sortedByBestPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
);

console.table(sortedByBestPlayers);

const sortedByWorstPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
);

console.table(sortedByWorstPlayers);

//* По первой букве в имени

const byName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];

  if (result) {
    return 1;
  }

  if (!result) {
    return -1;
  }
});

console.log('---------------------');

//* Сортировка слов с методом a.localeCompare(b)

const students = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];

const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder);
// [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder);
// [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

console.log('---------------------');
