//* у стрелки нет arguments, собираем через rest

const add = function (a, b, c) {
  console.log(arguments);
  return a + b + c;
};

const arrow = (...args) => {
  console.log(args); // [2, 7, 9]
};

console.log(add(5, 10, 15));
console.log(arrow(2, 7, 9));

console.log('--------------------');

//* контекст внутри стрелки опр. место ее обьявления, а не вызова и ссылается на костекст родительской функ-ии

const user = {
  name: 'Mango',
  showName() {
    console.log(this);
    console.log(this.name);

    const inner = () => {
      console.log(this); // {name: 'Mango', showName: ƒ}
    };

    // const inner = function () {
    //   console.log(this); // undefined
    // };

    inner();
  },
};

user.showName();

console.log('--------------------');
