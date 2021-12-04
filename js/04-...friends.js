//* Работа с коллекцией (массив обектов)

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.table(friends);

for (const friend of friends) {
  friend.newprop = 555; // добавление ко всем обьектам
}

console.table(friends);

friends[1].exp = 'experimental'; // добавление к одному обьекту
console.table(friends);

console.log('--------------------');

//* Найти друга по имени

const findFriendByName = function (allFriends, name) {
  for (const friend of friends) {
    console.log(friend.name);
    if (friend.name === name) {
      return '----FOUND----';
    }
  }
  return '----DID NOT FIND----';
};

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

console.log('--------------------');

//* получить имена всех друзей

const getAllNames = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    names.push(friend.name);
  }
  return names;
};

console.log(getAllNames(friends));

console.log('--------------------');

//* получить имена друзей онлайн

const getOnlineFriends = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    console.log(friend.online);
    if (friend.online) {
      names.push(friend.name);
    }
  }
  return names;
};

console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {};

console.log('--------------------');

//* получить обьект массивов

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }
    friendsByStatus.offline.push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByStatus(friends));
