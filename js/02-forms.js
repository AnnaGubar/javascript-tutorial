/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements - есть только у формы
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  console.dir(event.currentTarget);
  console.dir(event.currentTarget[1].value); // password
  console.dir(event.currentTarget.elements.password.value); // password

  const formData = new FormData(event.currentTarget); // сбор значений формы
  console.log(formData);

  formData.forEach((value, name) => {
    console.log(`${name}: ${value}`);
  });
}
