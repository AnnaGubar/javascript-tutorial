// * if...else

// скрипт спрашивающий: "Какое официальное название JavaScript?" Если пользователь вводит "ECMAScript", то показать через alert: "Верно!" в противном случае отобразить: "Не знаете? ECMAScript!"

// const inputValue = prompt('Какое официальное название JavaScript?');
// if (inputValue === 'ECMAScript') {
//   alert('Верно!');
// } else alert('Не знаете? ECMAScript!');

// ----------------------------------

//* for (let i...)

// Цикл выводящий в консоль числа от max до min по убыванию. Выведите в консоль всех четных чисел от min до max

// const max = 10;
// const min = 2;
// for (let i = min; i <= max; i += 1) {
//   console.log(i);
// }
// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
// }
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) console.log(i);
// }

// ----------------------------------

//* .padStart(0, 0)

//Скрипт получающий от пользователя число (количество минут) и выведет в консоль строку в формате часов и минут

// const inputValue = prompt('Enter a number');
// const hours = Math.floor(inputValue / 60);
// const minutes = inputValue % 60;

// console.log(`${hours}:${String(minutes).padStart(2, 0)}`);

// ----------------------------------

// четные и не четные

// const max = 10;
// const min = 2;

// let totalEven = 0;
// let totalOdd = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     totalEven += i;
//   } else {
//     totalOdd += i;
//   }
// }
// console.log('totalEven:', totalEven, 'totalOdd:', totalOdd);

// ----------------------------------

// Напишите код, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера
//Если посетитель вводит "Админ", то prompt запрашивает пароль. Если ничего не ввели или нажата клавиша Esc вывести строку "Отменено" В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так: Если введён пароль "Я главный", то вывести строку "Здравствуйте!" иначе выводить строку "Неверный пароль!"

// const login = 'Админ';
// const parol = 'Я главный';
// const validLogin = prompt('Введи логин');

// if (login === validLogin) {
//   const validLogin = prompt('Введи пароль');

//   if (parol === validLogin) {
//     alert('Здравствуйте!');
//   } else {
//     alert('Неверный пароль!');
//   }
// } else {
//   alert('Я вас не знаю');
// }

// ----------------------------------

//* do...while

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total. Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt. После того как пользователь прекратил ввод нажав на кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]." Делать проверку,что пользователь ввел именно число, а не произвольный набор символов, не нужно.

// let inputValue = 0;
// let total = 0;

// do {
//   inputValue = prompt('enter a number');
//   total += Number(inputValue);
// } while (inputValue !== null);
// console.log(total);

// ----------------------------------

//* do...while

// Напишите цикл, который предлагает ввести число больше 100 через prompt. Если если посетитель ввёл другое число - попросить ввести ещё раз и так далее. Цикл должен спрашивать число, пока посетитель не введёт число больше 100, либо не нажмет кнопку Отмена в prompt

// let inputValue;

// do {
//   inputValue = prompt('Enter a number');
//   console.log(inputValue);
// } while (inputValue < 100);
