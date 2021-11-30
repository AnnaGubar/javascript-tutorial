// *** Скрипт заменяющий регистр символа на противоложный *** /

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
  // if (letter === letter.toLowerCase()) {
  //   console.log('Эта буква в нижнем регистре - ', letter);
  //   invertedString += letter.toUpperCase();
  // } else {
  //   console.log('Эта буква в верхнем регистре - ', letter);
  //   invertedString += letter.toLowerCase();
  // }

  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}
console.log('Инверсия -', invertedString);
