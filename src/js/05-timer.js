import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

const refs = {
  startBtn: document.querySelector('[data-action-start]'),
  stopBtn: document.querySelector('[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

let intervalId;
let initTime;

refs.startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = initTime - currentTime;
    const time = convertMs(diff);
    const str = getTime(time);

    refs.clockface.textContent = str;
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
  }, initTime - Date.now() - 1000);

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
});

refs.stopBtn.addEventListener('click', () => {
  console.log('STOP');
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
});

//!===============================================================

function convertMs(ms) {
  let d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return { d: d, h: h, m: m, s: s };
}

function getTime({ h, m, s }) {
  h = h.toString().padStart(2, '0');
  m = m.toString().padStart(2, '0');
  s = s.toString().padStart(2, '0');

  return `${h}:${m}:${s}`;
}

//!===============================================================

flatpickr('.js-input', {
  defaultDate: new Date(),
  enableTime: true,
  time_24hr: true,

  onClose(selectedDates, dateStr, instance) {
    const userDate = selectedDates[0];
    initTime = userDate;
  },
});
