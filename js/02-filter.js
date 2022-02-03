const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

const listItemsMarkup = createListItemsMarkup(tech); // создание разметки
populateList(listItemsMarkup); // отрисовка разметки

function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}

function onFilterChange(evt) {
  console.log('INPUT');

  // получаем значение из инпута
  const filter = evt.target.value.toLowerCase();

  // фильтруем список на значение инпута
  const filteredItems = tech.filter(t =>
    t.label.toLowerCase().includes(filter),
  );

  // создаем разметку результата фильтра
  const listItemsMarkup = createListItemsMarkup(filteredItems);

  // отрисовываем
  populateList(listItemsMarkup);
}
