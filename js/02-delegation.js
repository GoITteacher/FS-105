/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

// const container = document.querySelector('.container');

// const box1 = container.children[0];
// const box2 = container.children[1];
// const box3 = container.children[2];

// box1.addEventListener('click', () => {});

// box2.addEventListener('click', () => {});

// box3.addEventListener('click', () => {});

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

const container = document.querySelector('.container');

container.addEventListener('click', e => {
  //   if (e.target.nodeName !== 'BUTTON') return;
  //   if (!e.target.classList.contains('box')) return;
  if (e.target === e.currentTarget) return;
  console.log(e.target.dataset.color);
});
