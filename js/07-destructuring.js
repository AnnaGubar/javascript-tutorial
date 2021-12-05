const playList = {
  name: 'мой плейлист',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
};

console.log(
  playList.name,
  playList.rating,
  playList.tracks,
  playList.trackCount,
);
//переименование и дефолтное значение
const { rating, trackCount: numberOfTracks = 0, author = 'user' } = playList;

console.log(rating, numberOfTracks, author);

console.log('--------------------');

//* глубокая деструк.

const profile = {
  name: 'FRH rghb',
  tag: 'egrfvddes',
  location: 'Ukraine, Kiev',
  avatar: 'https://...318.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = profile;

console.log(name, tag, location, avatar, followers, views, likes);

console.log('--------------------');

const rgb = [255, 100, 80];

const [a, , c] = rgb; // пропуск свойств при деструктр.
console.log(a, c);

console.log('--------------------');

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const ratings1 = Object.values(authors);
console.log('max -', Math.max(...ratings1)); //9

const keys = Object.keys(authors);
for (const key of keys) {
  console.log(key);
  console.log(authors[key]);
}

const entries = Object.entries(authors);

// for (const entry of entries) {
// console.log(entry);
// console.log(entry[0], entry[1]);
// }

for (const [name, rating] of entries) {
  // const [name, rating] = entry;
  console.log(name, rating);
}

console.log('--------------------');

const profile3 = {
  name1: 'Dana Fil',
  tag1: 'helloWorld',
  location1: 'Ukraine, Kiev',
  avatar: 'https://...318.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name1, tag1, location1, ...restProps } = profile3;
console.log(name1, tag1, location1);
console.log(restProps);

console.log('--------------------');

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
console.log(forecast);

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;

console.log(forecast);

console.log('--------------------');

function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

console.log(
  calculateMeanTemperature({
    today: { low: 37, high: 40 },
    tomorrow: { low: 33, high: 38 },
  }),
);
console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  }),
);
