// * array.concat(array)   =   [...spread]
// * Object.assign({}, obj, obj)   =   [...spread]

const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
console.log(numbers);

const numbers1 = [0, 5, 10, ...[1, 2, 3], 4, 5];
console.log(numbers1);

console.log('--------------------');

const temps = [18, 14, 12, 21, 17, 59, 24];
console.log(Math.max(...temps));
console.log(Math.min(...temps));

console.log('--------------------');

const lastWeekTemps = [1, 2, 3];
const currenrTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currenrTemps, ...nextWeekTemps];
console.log(allTemps);

console.log('--------------------');

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

const c = { name: 'Mango', ...a, ...b };
console.log(c);

console.log('--------------------');

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';

  return { ...{ category, priority, completed }, ...data };
}

console.log(makeTask({}));
//{ category: "General", priority: "Normal", completed: false }
console.log(
  makeTask({
    category: 'Homemade',
    priority: 'Low',
    text: 'Take out the trash',
  }),
);
//{ category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
console.log(makeTask({ text: 'Buy bread' }));
//{ category: "General", priority: "Normal", text: "Buy bread", completed: false }

console.log('--------------------');

//* Вернуть копию обьекта либо массива

const copyInstance = function (instance) {
  if (Array.isArray(instance)) {
    return [...instance];
  }

  return { ...instance };
};

const array = [20, 22, 11, 15];
const newArray = copyInstance(array);

console.log(`Is equal - ${newArray === array}`); // false

//* поверхностное копирование

const users = [
  {
    name: 'Alex',
  },
  {
    name: 'John',
  },
];

const newUsers = [...users];
console.log(users === newUsers); // false

newUsers[0].name = 'Potato';
console.log(newUsers);
console.log(users);
