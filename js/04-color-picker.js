let colorPalette = [];
const LENGTH = 10;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}

createPaletteItems();
//!===============================================================
const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};
//!===============================================================

function colorTemplate(color) {
  return `<li class="color-item">
  <button class="color-body" style="background-color:${color.hex};" data-color="${color.hex}"></button>
  <div class="color-footer">
      <div>HEX: ${color.hex}</div>
      <div>RGB: ${color.rgb}</div>
      <div></div>
  </div>
</li>`;
}

function colorsTemplate(arr) {
  return arr.map(colorTemplate).join('');
}

//!===============================================================
const markup = colorsTemplate(colorPalette);
refs.itemList.innerHTML = markup;

refs.btnReloadColor.addEventListener('click', () => {
  createPaletteItems();
  const markup = colorsTemplate(colorPalette);
  refs.itemList.innerHTML = markup;
});

//!===============================================================

function showModal() {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onModalClose);
}

function closeModal() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onModalClose);
}

//!===============================================================

// refs.itemList.addEventListener('click', e => {
//   if (e.target === e.currentTarget) return;
//   console.log('hello');
// });

refs.itemList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;
  const color = e.target.dataset.color;
  refs.modalElement.style.backgroundColor = color;
  showModal();
});

//!===============================================================

refs.backdropElem.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  closeModal();
});

//!===============================================================

function onModalClose(e) {
  console.log(e.code);
  if (e.code === 'Escape') {
    closeModal();
  }
}
