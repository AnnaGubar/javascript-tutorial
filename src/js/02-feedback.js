import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateTextarea();

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Добавляем throttle для болтливого события input
 */
function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}

/*
 * - Останавливаем поведение по умолчанию
 * - Очищаем форму
 * - Убираем сообщение из хранилища
 */
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset(); // после отправки очищаем форму

  localStorage.removeItem(STORAGE_KEY); // очищаем localStorage
}

/*
 * - Получаем значение из localStorage и добавляем его в textarea
 * - протестить: записать в textarea - перезагрузить страницу
 */

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });
