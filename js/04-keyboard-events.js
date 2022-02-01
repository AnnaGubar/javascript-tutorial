/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

// * только символьные
// window.addEventListener('keypress', onKeypress);

// * +служебные
window.addEventListener('keydown', onKeypress);

refs.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
  // * event.key - зависит от языка
  // * event.code - код клавиши
  // console.log(event.key, event.code);

  refs.output.textContent += event.key;
}

function onClearOutput() {
  refs.output.textContent = '';
}
