***https://devdocs.io*** - справочник JS

- script[type="module"] содержит Implicit strict mode

- _isNaN_ - функ. отвечает на вопрос "Это не число?", ответ _boolean_

**_Окно_**

- _alert_ - сообщение "ок", ничего не возвращает
- _confirm_ - вопрос "cancel" "ок" возвращает _boolean_
- _prompt_ - пользователь вводит данные, возвр. _строку или null_

**_Числа_**

- _toFixed(кол.символов после точки)_ - возвр. _строку_
- _Math.pow(число, степень)_ - возводит в степень = (число\*\*степень)
- _Math.random()_(max-min)+min - диапазон случайных чисел
- _Math.round(число для округления)_

**_Строки_**

- _toLowerCase_ _toUpperCase_ - методы строк
- _includes_ - возвр. _true_ или _false_
- _indexOf()_ - возвр. индект либо -1 если ничего не найдено
- _replace()_ _replaceAll()_ - возвр. новую строку, в которой первое (replace)
  или все совпадения (replaceAll) подстроки заменены на указанное значение

**_Операторы сравнения_** приводят строку к числу

- _false-значения_ : 0, '', null, undefined, NaN, false, - все остальные true
  (-4, 'false')
- _&&_ - если все true то возвр. последний операнд - либо первый false
- _||_ - возвр. первый true - либо последний операнд
