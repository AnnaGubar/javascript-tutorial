//* CALL - перечесление эл-ов

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = { username: 'Манго' };
const poly = { username: 'Поли' };

greetGuest.call(mango, 'Добро пожаловать'); // Добро пожаловать, Манго.

greetGuest.call(poly, 'С приездом'); // С приездом, Поли.

console.log('--------------------');

// Значение переменной `messages` это массив `['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.', 'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.', 'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.']`

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${
    position + 1
  }-й в очереди.`;
}

const messages = [];

for (let i = 0; i < orders.length; i += 1) {
  // console.log(i, orders[i]);
  // console.log(orders.length);
  let x = composeMessage.call(orders[i], i);
  // console.log(x);
  messages.push(x);
}

console.log(messages);

console.log('--------------------');

//* APPLY - перечесление эл-ов в массиве, даже если эл один

const orders1 = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

function composeMessage1(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages1 = [];
for (let i = 0; i < orders1.length; i++) {
  const msg = composeMessage1.call(orders1[i], i + 1);
  messages1.push(msg);
}

console.log(messages1);

console.log('--------------------');

//* BIND

function greet(clientName) {
  return `${clientName}, добро пожаловать в «${this.service}».`;
}

const steam = { service: 'Steam' };
const steamGreeter = greet.bind(steam);
console.log(steamGreeter('Манго')); // "Манго, добро пожаловать в «Steam»."

const gmail = { service: 'Gmail' };
const gmailGreeter = greet.bind(gmail);
console.log(gmailGreeter('Поли')); // "Поли, добро пожаловать в «Gmail»."

console.log('--------------------');
// {
//   const customer = {
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };

//   function makeMessage(callback) {
//     // callback() это вызов метода getFullName без объекта
//     console.log(`Обрабатываем заявку от ${callback()}.`);
//   }

//   makeMessage(customer.getFullName); // Будет ошибка при вызове функции
// }
console.log('--------------------');

const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter(e => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}
//-----------
const firstInvoke = logAndInvokeAction(
  'kiwi@mail.uk',
  service.subscribe.bind(service),
);
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction(
  'poly@hotmail.de',
  service.unsubscribe.bind(service),
);
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
