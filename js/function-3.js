function foo() {
  return prompt('write a word');
}

const x = foo();
console.log(`User wrote ${x}`);
const num1 = Number(prompt('Введи первое число'));
const num2 = Number(prompt('Введи второе число'));
const operation = prompt('Укажи математический оператор');

const calculator = function (x, y, oper) {
  if (oper === '*') {
    return x * y;
  }
  if (oper === '-') {
    return x - y;
  }
  if (oper === '+') {
    return x + y;
  }
  if (oper === '/') {
    return x / y;
  }
  return alert('Введены не правильные значения');
};

console.log('Результат:', calculator(num1, num2, operation));

// const LOGIN = 'Anna';
// const PAROL = 'parolL2458';

// const valid = function () {
//   const login = prompt('Введи логин');

//   if (login === LOGIN) {
//     const parol = prompt('Введи пароль');
//     if (parol === PAROL) {
//       alert('Все ОК!');
//       return 'success';
//     }
//   }

//   alert('Что-то не так');
//   return 'error';
// };

// console.log(valid());
