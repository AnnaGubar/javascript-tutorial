/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// * чаще для анимаций
// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);

// function onInputFocus() {
//   console.log('Инпут получил фокус - событие focus');
// }

// function onInputBlur() {
//   console.log('Инпут потерял фокус - событие blur');
// }

// * результат получает при потере фокуса
// * исп. на checkboxes, radiobuttons
// refs.input.addEventListener('change', onInputChange);

// * исп. для текстовых инпутов
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event, event.currentTarget.value);

  refs.nameLabel.textContent = event.currentTarget.value;
}

refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onLicenseChange(event) {
  refs.btn.disabled = !event.currentTarget.checked; // кнопка выкл когда эл не выбран

  console.log(event.currentTarget.checked);
}
