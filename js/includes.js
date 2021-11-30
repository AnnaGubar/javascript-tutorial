// *** Скрипт поиска логина *** /

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4hjjkl'];
const loginToFind = 'poly1scute';
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//   if (logins[i] === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
//   message = `Пользователь ${loginToFind} не найден`;
// }
// console.log(message);

//------------ логика от обратного------------

// let message = `Пользователь ${loginToFind} не найден`;

// for (let i = 0; i < logins.length; i += 1) {
//   if (logins[i] === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }
// console.log(message);

//----------------for...of------------

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }
// console.log(message);

//--------------.includes()-----------

const message = logins.includes(loginToFind) ? 'найден' : 'не найден';
console.log(message);
