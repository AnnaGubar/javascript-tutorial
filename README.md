# Распространение событий

# Делегирование событий

- 1 - отличие _evt.target_ и _evt.currentTarget_
- 2 - _evt.target.nodeName_ - фильтр делегирования
- 3 - _new Set()_ - метод уникальных значений (для примитивов)
- 4 - _evt.target.classList.contains('класс')_ - фильтр делегирования
  - _елемент.parentNode_ - родительский елемент
  - _evt.target.closest('.класс')_ - поиск ближайшего предка с заданным классом
- 5 - оператор необязательного свойства _obj?.ключ_
