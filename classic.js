const refs = {
  controls: document.querySelector('#tabs-1 [data-controls]'),
  panes: document.querySelector('#tabs-1 [data-panes]'),
};

refs.controls.addEventListener('click', onControlsClick);

function onControlsClick(event) {
  event.preventDefault();
  //это делать не обязательно, так как якорь не перезагружает страницу

  // nodeName видит теги большими буквами
  // console.log(event.target.nodeName); // A - DIV

  if (event.target.nodeName !== 'A') {
    console.log('Кликнули не в ссылку');
    return;
  }

  // выбирает все кликнутые ел-ты
  // const controlItem = event.target;
  // controlItem.classList.add('controls__item--active');

  // выбор последнего кликнутого ел-та
  const currentActiveControlItem = refs.controls.querySelector(
    '.controls__item--active',
  );

  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove('controls__item--active');

    const paneId = getPaneId(currentActiveControlItem);
    const pane = getPaneById(paneId);
    pane.classList.remove('pane--active');
    // console.log(paneId);
  }

  const controlItem = event.target;
  controlItem.classList.add('controls__item--active');

  const paneId = getPaneId(controlItem);
  // console.log('⭐ ~ paneId', paneId); // paneId apple

  const pane = getPaneById(paneId);
  // console.log('⭐ ~ pane', pane); //  pane

  pane.classList.add('pane--active');
  // console.log(pane); // apple - grapes - peach
}

function getPaneId(control) {
  return control.getAttribute('href').slice(1);
}

function getPaneById(id) {
  return refs.panes.querySelector(`#${id}`);
}
