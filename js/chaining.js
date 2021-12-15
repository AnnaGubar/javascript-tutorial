const numbers = [1, 5, 2, 4, 3];

const greaterThenTwo = numbers.filter(num => num > 2);
console.log('filter:', greaterThenTwo);

const multByThree = greaterThenTwo.map(num => num * 3);
console.log('map:', multByThree);

const sorted = multByThree.sort((a, b) => a - b);
console.log('sort:', sorted);

// Цепочка предыдущих трёх
const sorted1 = numbers
  .filter(num => num > 2)
  .map(num => num * 3)
  .sort((a, b) => a - b);

console.log('filter + map + sort:', sorted1);

console.log('--------------------------');

//* Сортируем тех кто онлайн по рангу

const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
  { id: 'id-5', tag: 'Chelsy', isOnline: false, rank: 200 },
];

const onlineAndSorted = players
  .filter(player => player.isOnline)
  .sort((playerA, playerB) => playerA.rank - playerB.rank);

console.table(onlineAndSorted);

//* Chaining в методах объекта как jquery

const element = {
  class: '',
  hovered: false,
  changeClass(cls) {
    this.class = cls;

    return this;
  },
  toggleHovered() {
    this.hovered = !this.hovered;

    return this;
  },
};

element.toggleHovered().changeClass('open').toggleHovered();
console.log(element);
