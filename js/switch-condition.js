/*
Скрипт выбора стоимости отеля по кол - ву звезд.
1 u 2 - 20$, 3 - 30$, 4 - 50$
Если в переменной stars что-то кроме пунктов 1-5 - вывести строку "Такого кол-ва звезд нет". 
*/
const stars = 3;
let price;

switch (stars) {
  case 1:
  case 2:
    price = 20;
    break;
  case 3:
    price = 30;
    break;
  case 4:
    price = 50;
    break;
  
  default:
    console.log('Такого кол-ва звезд нет');
}
console.log(price);

console.log('------------------');

const option = 15;
let message;
switch (option) {
  case 1:
    message = 'Вы можете забрать завтра';
    break;
  case 2:
    message = 'Курьер доставит с 8:00 до 21:00';
    break;
  case 3:
    message = 'Посылка будет отправлена сегодня';
    break;
  
  default:
    message = 'Вам перезвонит менеджер';

}
console.log(message);

console.log('------------------');

// const userInput = prompt('введите марку машины')

// switch (userInput.toLocaleLowerCase()) {
//   case 'bmw':
//     console.log('ответ bmw');
//     break;
//   case 'audi':
//     console.log('ответ audi');
//     break;
//   case 'kia':
//     console.log('ответ kia');
//     break;
//   case 'ford':
//     console.log('ответ ford');
//     break;
  
//   default:
//     console.log('другой ответ');
// }
