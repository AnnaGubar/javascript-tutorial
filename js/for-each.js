//* index, array - необязательные параметры

const num = [4, 5, 6, 20, 8, 62];

num.forEach(function (num, index, array) {
  console.log('number', num);
});

console.log(num);
