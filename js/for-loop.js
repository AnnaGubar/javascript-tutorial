for (let i = 1; i <= 5; i += 1) {
  console.log(i);
}

console.log('----------');

//обратный счет
for (let i = 5; i >= 1; i -= 1) {
  console.log(i);
}

console.log('----------');

/*
Скрипт подсчитывающий общую сумму зарплат работников.
Кол-во работников хранится в переменной employees.
ЗП - случайное число от 500 до 5000.
Записать сумму в переменную totalSalary и вывести в консоль.
*/
const minSalary = 500;
const maxSalary = 5000;
const employees = 4;
let totalSalary = 0;
for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary,
  );
  console.log(`ЗП работника номер ${i} - ${salary}`);
  totalSalary += salary;
}
console.log('totalSalary: ', totalSalary);

console.log('----------');

/*
Скрипт подсчитывающий сумму всех четных чисел(в диапазоне от min до max).
*/
const min = 6;
const max = 13;
let totalCount = 0;
let totalUncount = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    // console.log('count - ', i);
    totalCount += i;
  }
  if (i % 2 !== 0) {
    // console.log('uncount - ', i);
    totalUncount += i;
  }
}
console.log('totalUncount: ', totalUncount);
console.log('totalCount: ', totalCount);

console.log('----------');

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log('Нашли число 3, прерываем выполнение цикла');
    break;
  }
}
console.log('Лог после цикла');

console.log('----------');

const number = 10;
for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
}

console.log('----------');

//отрисовка треугольника по запросу длины

// const triangleSize = Number(prompt('Введите размер стороны треугольника'));
let row = '';

for (let i = 0; i < triangleSize; i += 1) {
  row += '1';
  console.log(row);
}
