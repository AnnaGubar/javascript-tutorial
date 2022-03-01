import articlesTpl from './templates/articles.hbs';
import NewsApiService from './js/news-service';

const refs = getRefs();
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  newsApiService.query = e.currentTarget.elements.query.value;

  if (newsApiService.query === '') {
    return alert('Введи что-то нормальное');
  }

  newsApiService.resetPage(); // обнуление страницы поиска (page=1)
  clearArticlesContainer(); // очищение разметки поиска
  newsApiService.fetchArticles().then(articles => {
    appendArticlesMarkup(articles); // новая отрисовка по запросу
    newsApiService.incrementPage(); // page += 1
  });
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

function getRefs() {
  return {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    sentinel: document.querySelector('#sentinel'),
  };
}

// Intersection Observer

const onEntry = entries => {
  entries.forEach(entry => {
    console.log('значение запроса:', newsApiService.query);

    if (entry.isIntersecting && newsApiService.query !== '') {
      console.log(
        'случилось пересечение! загружаем и отрисовываем следующую страницу',
        Date.now(),
      );

      newsApiService.fetchArticles().then(articles => {
        appendArticlesMarkup(articles);
        newsApiService.incrementPage();
      });
    }
  });
};
// если нет значения в запросе то нет разметки, а значит сразу будет видно div.sentinel
// что бы его спратать дополняем условие, что input не пустой

const observer = new IntersectionObserver(onEntry, {
  rootMargin: '150px',
});

observer.observe(refs.sentinel);
