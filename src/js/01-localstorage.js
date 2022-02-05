console.log(localStorage);

// записали в localStorage и привели в JSON-формат (в виде строки)
localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));

// получили с localStorage
const savedData = localStorage.getItem('my-data');
console.log('в виде JSON-формата', savedData);

// привели в рабочий вид (в обьект)
const parsedData = JSON.parse(savedData);
console.log('в виде обьекта', parsedData);
