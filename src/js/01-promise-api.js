import '../css/common.css';

/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
    }

    reject('Промис выполнился с ошибкой (отклонён, rejected)');
  }, 1000);
});

// console.log(promise);

// promise.then(onFulfilled, onRejected);

function onFulfilled(result) {
  // console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  // console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
}

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

promise
  .then(onFulfilled)
  .then(x => {
    console.log(x);

    return 10;
  })
  .then(y => {
    console.log(y);
  })
  // .catch(error => console.log(error))
  .catch(onRejected)
  .finally(() => console.log('❕ Я буду выполнен в любом случае ❕'));
