**_Array.prototype.forEach(callback(currentValue, index, array), thisArg)_**

- Поэлементо перебирает оригинальный массив
- Ничего не возвращает
- Заменяет классический for, если не нужно прерывать цикл \*/

**_Array.prototype.map()_**

- Поэлементо перебирает оригинальный массив
- Не изменяет оригинальный массив
- Возвращает новый массив такой же длины

**_Array.prototype.filter()_**

- Поэлементо перебирает оригинальный массив
- Возвращает новый массив (с элементами или пустой)
- Добавляет в возвращаемый массив элементы которые удовлетворяют условию
  коллбек-функции
- если коллбек вернул true элемент добавляется в возвращаемый массив
- если коллбек вернул false элемент НЕ добавляется в возвращаемый массив

**_Array.prototype.find()_**

- Поэлементо перебирает оригинальный массив
- Возвращает первый элемент удовлетворяющий условию или undefined

**_Array.findIndex((element, index, array)_**

- если нашел - возвра true, если нет то -1

**_Array.prototype.every()_**

- Поэлементо перебирает оригинальный массив
- Возвращает true если все элементы массива удовлетворяют условию

**_Array.prototype.some()_**

- Поэлементо перебирает оригинальный массив
- Возвращает true если хотя бы один элемент массива удовлетворяет условию

  **_Array.prototype.reduce()_**

  - Поэлементо перебирает оригинальный массив
  - Возвращает что угодно 🤯
  - Заменяет всё на свете, но использовать нужно с умом

**_Array.prototype.sort(callback(currentEl, nextEl){})_**

- Сортирует и ИЗМЕНЯЕТ оригинальный массив
- По умолчанию сортирует по возрастанию - приводит элементы к строке и сортирует
  по [Unicode](https://unicode-table.com/en/) _compareFunction - функция_
  сравнения (callback) Элементы массива сортируются в соответствии с её
  возвращаемым значением
- eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
- если compareFunction(A, B) больше 0, сортировка поставит B перед A
- если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными
  по отношению друг к другу, но отсортирует их по отношению ко всем другим
  элементам.

# копия массива

- Array.prototype.slice()
- Операция spread

**_charCodeAt()_** - unicode

```
const abc = 'apple';
let total = 0;

for (let i = 0; i < abc.length; i += 1) {
  console.log(i, abc.charCodeAt(i));

  total += abc.charCodeAt(i);
}
console.log(total);
```

**_Array.prototype.flat(depth)_**

- Разглаживает массив до указанной глубины
- По умолчанию глубина 1

**_Array.prototype.flatMap(callback)_** - map + flat

# Библиотека Lodash

https://github.com/lodash/lodash

'<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>' -
вставлять перед своим кодом в HTML

- .isEmpty()- пустая ли сущность
- .union() - создает массив уникальных значений
- .range([start=], end, [step=1) - создает массив значений от...до
- .sortBy(collection, [iteratees=[_.identity]]) - filter
- .sum() - суммирует значения массива
- .sumBy() - суммирует свойства в обекте
- .min() .max()
- .minBy() .maxBy()
- .camelCase() .capitalize() .kebabCase() .lowerCase() .upperCase()
- .uniq() .uniqBy()
- .sortedUniq() .sortedUniqBy()
- .random()

**_console.log(user?.location?.city);_** - проверка на наличие свойства
