//* Typical Observer's registration

// что сделать во время регистрации пересечения
// isIntersecting - метод класса entry - регистрация пересечения (boolean)
const callback = (entries, io) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Привет из колбека в forEach');
      console.log(entry.target); // ссылка на эл.пересечения (sentinel)
    }
  });
};

// rootMargin - как только ел-ту до пересечения остается 100px - фиксируется пересечение
// threshold - фиксация пересечения регистрируется когда эл пересек root на 50% от своего размера
const options = {
  // rootMargin: '100px', 
  // threshold: 50%,
};

// observer регистрирует любое событие при пересечении наблюдаемого элемента и root
// root - по умолчанию viewport, но можно сделать любой DOM-element
const observer = new IntersectionObserver(callback, options);

const sentinel = document.querySelector('#sentinel'); // наблюдаемый эл.
observer.observe(sentinel); // метод наблюдения
// observer.unobserve(sentinel); // метод отписания от наблюдения
