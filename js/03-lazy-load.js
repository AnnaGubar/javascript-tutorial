/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения 'load'
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// *** вариант удаления регистратора событий
// ❕ опция { once: true } - когда загрузится картинка сработает функция onImageLoaded - addEventListener самоудалится

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear');
}
