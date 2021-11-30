// *** Работа с коллекцией карточек *** /

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

// ---- удаление по индексу ---- ***indexOf*** ----

const cardToRemove = 'Карточка-3';
const index1 = cards.indexOf(cardToRemove);

console.log(index1);

cards.splice(index1, 1);

console.log(cards);

// ---- добавление по индексу ---- ***indexOf*** ----

const cardToInsert = 'Карточка-6';
const index2 = 3;

cards.splice(index2, 0, cardToInsert);

console.log(cards);

// ---- обновление по индексу ---- ***indexOf*** ----

const cardToUpdate = 'Карточка-4';
const index3 = cards.indexOf(cardToUpdate);

console.log(index3);

cards.splice(index3, 1, 'Обновленная карточка-4');

console.log(cards);
