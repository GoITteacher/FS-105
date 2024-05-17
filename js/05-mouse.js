/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector('.js-box');

//!===============================================================
// let counter = 0;
// boxRef.addEventListener('mouseenter', () => {
//   boxRef.classList.add('box--active');
//   alert('WARNING!!!');
//   counter++;
//   boxRef.firstElementChild.textContent = counter;
// });

// boxRef.addEventListener('mouseleave', () => {
//   boxRef.classList.remove('box--active');
//   alert('Ok');
// });

//!===============================================================

/* const child = boxRef.firstElementChild;
child.style.position = 'absolute';

boxRef.addEventListener('mousemove', e => {
  console.log(e.x, e.y);

  child.style.left = `${e.x - 50}px`;
  child.style.top = `${e.y - 100}px`;
}); */

// boxRef.style.transition = 'all 0.2s linear';

// boxRef.addEventListener('mousemove', () => {
//   const x = Math.round(Math.random() * window.screen.width - 200);
//   const y = Math.round(Math.random() * window.screen.height - 200);
//   boxRef.style.left = `${x}px`;
//   boxRef.style.top = `${y}px`;
// });

//!===============================================================
