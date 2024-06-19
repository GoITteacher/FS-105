import {
  getAllBooks,
  createBook,
  deleteBook,
  updateBook,
  resetBook,
} from './modules/booksAPI';

//!===============================================================

const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  bookListElem: document.querySelector('.js-article-list'),
  loader: document.querySelector('.js-loader'),
};

//!===============================================================

refs.createFormElem.addEventListener('submit', onBookCreate);
refs.updateFormElem.addEventListener('submit', onBookUpdate);
refs.resetFormElem.addEventListener('submit', onBookReset);
refs.bookListElem.addEventListener('click', onBookDelete);

async function onBookCreate(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const book = {
    title: formData.get('bookTitle'),
    desc: formData.get('bookDesc'),
    author: formData.get('bookAuthor'),
    rating: Math.round(Math.random() * 10),
    price: Math.round(Math.random() * 1000),
  };

  showLoader();
  try {
    const createdBook = await createBook(book);
    const markup = bookTemplate(createdBook);
    refs.bookListElem.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    console.log(err);
  }

  hideLoader();
  e.target.reset();
}

async function onBookUpdate(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const book = {};

  formData.forEach((value, key) => {
    key = key.replace('book', '').toLowerCase();
    if (value) book[key] = value;
  });

  try {
    const res = await updateBook(book);
    const oldBook = document.querySelector(`.book-item[data-id="${book.id}"]`);
    const markup = bookTemplate(res);
    oldBook.insertAdjacentHTML('afterend', markup);
    oldBook.remove();
  } catch (err) {
    console.log(err);
  }

  e.target.reset();
}

async function onBookReset(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const id = formData.get('bookId');

  const book = {
    title: formData.get('bookTitle'),
    desc: formData.get('bookDesc'),
    author: formData.get('bookAuthor'),
    rating: Math.round(Math.random() * 10),
    price: Math.round(Math.random() * 1000),
  };

  try {
    const res = await resetBook(id, book);
    const oldBook = document.querySelector(`.book-item[data-id="${id}"]`);
    const markup = bookTemplate(res);
    oldBook.insertAdjacentHTML('afterend', markup);
    oldBook.remove();
  } catch (err) {
    console.log(err);
  }

  e.target.reset();
}

async function onBookDelete(e) {
  if (!e.target.dataset.type) return;
  const id = e.target.dataset.id;
  try {
    await deleteBook(id);
    const li = e.target.closest('li');
    li.remove();
  } catch {}

  e.target.reset();
}

//!===============================================================

async function init() {
  showLoader();

  try {
    const data = await getAllBooks();
    const markup = booksTemplate(data);
    refs.bookListElem.innerHTML = markup;
  } catch {}

  hideLoader();
}

init();

//!===============================================================

function bookTemplate({ id, title, desc, author, img, price, rating }) {
  return `
<li class="book-item card" data-id="${id}">
  <img
    class="book-img"
    src="https://picsum.photos/1280/720?random=${id}"
    alt=""
  />

  <h5 class="book-title">${title}</h5>
  <h6>Author: ${author}</h6>
  <p class="book-desc">${desc}</p>

  <div class="book-info">
    <span>Price: ${price}</span>
    <span>Rating: ${rating}</span>
    <button data-type="remove-btn" data-id="${id}">Delete${id}</button>
  </div>
</li>`;
}

function booksTemplate(books) {
  return books.map(bookTemplate).reverse().join('');
}

//!===============================================================

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}
