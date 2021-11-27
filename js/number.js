//*Number.parseInt()
//*Number.parseFloat()
//*.toFixed()
//*Math.pow(число, степень) = (2**3)
//*Math.random()*(max-min)+min - диапазон случайных чисел
//*Math.round(число для округления)


// let x = '50px'; 
// let x = '50.24px';
// let x = '5a0px';
// let x = 'a50px';
// x = Number.parseInt(x);
// console.log(x);

// x = Number.parseFloat(x);
// console.log(x);

let salary = 1300.16472;
// salary = salary.toFixed(2);         //упрощенный вид
// salary = Number(salary);            //упрощенный вид
// salary = Number(salary.toFixed(2)); // сложнее
// console.log(salary);                //упрощенный вид
console.log(Number(salary.toFixed(2)));

console.log(Number('fesgrdhft'));      //NaN

console.log(Math.pow(2, 8));           //256
console.log(2**8);                     //256

//*Задача*
/*Напиши скрипт который просит пользователя ввести число и степень, 
возводит число в эту степень и выводит результат в консоль.*/

//1.попросить ввести число и сохранить в переменную
// const base = Number(prompt('Введи число'));
//2.попросить ввести степень и сохранить в переменную
// const pow = Number(prompt('Введи число'));
//3.возвести число в степень и вывести в консоль
// console.log(Math.pow(base, pow));


const max = 30;
const min = 50;
const result = Math.random() * (max - min) + min;
console.log(result);
console.log(Math.round(result));

console.log('--------------------------');

console.log('5' - 3);      //2
console.log('5' + 3);      //53
console.log('5' - '4');    //1
console.log('5' + + '4');  //54
console.log('foo' + + 'foo');  //fooNaN
console.log('5' + - '2');  //5-2
console.log('5' + - + - - + - - + + - + - + - + - - - '-2'); //52
const z = 3;
console.log('5' + z - z);  //50
console.log('5' - z + z);  //5

