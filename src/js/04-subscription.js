import BSN from 'bootstrap.native';
import '../css/common.css';

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'), // кнопка "подписаться"
};
const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
const modal = new BSN.Modal('#subscription-modal'); // создание модалки

let promptCounter = 0; // начальный отсчет появления модалки
let hasSubscribed = false; // подписался?

openModal();

// 'hide.bs.modal' - кастомное событие bootstrap закрытия модалки
refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

//* setTimeout()

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Максимальное кол-во надоеданий или подписался');
    return;
  }

  setTimeout(() => {
    console.log('Открываем надоедалку');
    modal.show(); // метод модалки bootstrap
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true; // выбрал "подписаться"
  modal.hide(); // метод модалки bootstrap
}

//* setInterval()

// function openModal() {
//   const intervalID = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//       console.log('останавливаем интервал');
//       clearInterval(intervalID);
//       return;
//     }

//     console.log('Подпишись на рассылку! - ' + Date.now());
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// function onSubscribeBtnClick() {
//   hasSubscribed = true; // выбрал "подписаться"
//   modal.hide(); // метод модалки bootstrap
// }
