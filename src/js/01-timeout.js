import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('До вызова setTimeout');

// setTimeout(() => {
//   console.log('1 - Внутри callback для setTimeout');
// }, 2000);

// setTimeout(() => {
//   console.log('2 - Внутри callback для setTimeout');
// }, 1000);

// console.log('После вызова setTimeout');

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = (time, id) => {
  console.log(`${id} Лог через ${time} ms`);
};

const secondTimerId = setTimeout(logger, 3000, 3000, '2️⃣');
const firstTimerId = setTimeout(logger, 2000, 2000, '1️⃣');

console.log(firstTimerId); // идентификатор таймера = 1
console.log(secondTimerId); // идентификатор таймера = 2

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer); // условие для выполнения таймера

if (shouldCancelTimer) {
  console.log('~ зачистка setTimeout ~');
  clearTimeout(firstTimerId);
  clearTimeout(secondTimerId);
} else {
  console.log('~ идет выполнение setTimeout ~');
}
