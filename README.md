### Бесконечный скрол

- _document fragment_ - пустая оболочка для разметки

```
  const markup = '<p>text</p>';
  const fragment = new DocumentFragment();
  fragment.innerHTML = markup;
```

- _Intersection Observer_
  `https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/`
- класс _new URLSearchParams_ - удобная запись построения адреса (автоматичеки
  преобразует в строку)
