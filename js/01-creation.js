//*

function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
}

// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

registerGuest('Манго', greet);

console.log('----------------');

function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log('Роял гранд', makePizza);
//'Пицца Роял гранд готовится, ожидайте...'
console.log('Ультрасыр', deliverPizza);
//'Доставляем пиццу Ультрасыр.'
