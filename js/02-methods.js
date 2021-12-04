const playList = {
  name: 'мой плейлист',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
  // getName: function (a) {
  //   console.log('Это getName', a);   // старый вариант записи
  // },
  getName(a) {
    console.log('Это getName', a); // новый вариант записи метода
  },
};

console.log(playList);

playList.getName(2); // - метод обьекта

console.log('--------------------');

const playList1 = {
  name: 'мой плейлист',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
    this.trackCount = this.tracks.length;
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
};

playList1.changeName('Новое имя');
console.log(playList1);

playList1.addTrack('Новый трек 1');
console.log(playList1); // ['track-1', 'track-2', 'track-3', 'Новый трек']

playList1.updateRating(40);
console.log(playList1);
