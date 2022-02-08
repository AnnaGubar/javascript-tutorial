import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'), // интерфейс таймера
};

class Timer {
  constructor({ onTick }) {
    this.intervalId = null; // чтобы запомнить какой таймер запустили
    this.isActive = false; // чтобы не запускать таймер >1 раза
    this.onTick = onTick;

    this.init(); // изначальное отображение интерфейса таймера
  }

  init() {
    const time = this.getTimeComponents(0); // задаем изначальное время 00:00
    this.onTick(time); // интерфейс
  }

  start() {
    if (this.isActive) {
      return;
    }

    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime); // {hours: '00', mins: '00', secs: '02'}

      this.onTick(time); // отображение time в интерфейсе
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  // Принимает время в миллисекундах
  // Высчитывает сколько в них вмещается часов/минут/секунд
  // Возвращает обьект со свойствами hours, mins, secs
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  // принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
  pad(value) {
    return String(value).padStart(2, '0');
  }
}
// используем класс таймера и отрисовуем данные на интерфейсе
const timer = new Timer({
  onTick: updateClockface, // интерфейс
});

// без метода .bind ссылается на startBtn и stopBtn
refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// Рисует интерфейс
function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}
