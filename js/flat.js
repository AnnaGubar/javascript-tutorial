//* Array.prototype.flat(depth)

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
console.log(array.flat(3)); // 3 - вложенность массива в массив

console.log('-----------------------------------');

//* Array.prototype.flatMap(callback) - Комбинация map + flat

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// .flat()
const tags1 = tweets.map(t => t.tags).flat();
console.log(tags1);

// .flatMap()
const tags2 = tweets.flatMap(t => t.tags);
console.log(tags2);

// const stats = tags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});

const stats = tweets
  .flatMap(tweet => tweet.tags)
  .reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {},
  );

console.log(stats);
