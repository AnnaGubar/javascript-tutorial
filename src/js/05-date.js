import '../css/common.css';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

const date = new Date();
console.log('date', date);
console.log('date', date.getDate()); // день
console.log('date.getTime', date.getTime()); // Unix-время

// const date1 = Date.now();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = Date.now();

//   console.log('date1', date1);
//   console.log('date2', date2);

//   console.log(date2 - date1);
// }, 3000);
