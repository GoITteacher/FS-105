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
};

//!===============================================================

refs.createFormElem.addEventListener('submit', onBookCreate);
refs.updateFormElem.addEventListener('submit', onBookUpdate);
refs.resetFormElem.addEventListener('submit', onBookReset);
refs.bookListElem.addEventListener('click', onBookDelete);

function onBookCreate(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const book = {
    title: formData.get('bookTitle'),
    desc: formData.get('bookDesc'),
    author: formData.get('bookAuthor'),
    rating: Math.round(Math.random() * 10),
    price: Math.round(Math.random() * 1000),
  };

  createBook(book).then(createdBook => {
    const markup = bookTemplate(createdBook);
    refs.bookListElem.insertAdjacentHTML('afterbegin', markup);
  });
  e.target.reset();
}

function onBookUpdate(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const book = {};

  formData.forEach((value, key) => {
    key = key.replace('book', '').toLowerCase();
    if (value) book[key] = value;
  });

  updateBook(book).then(res => {
    const oldBook = document.querySelector(`.book-item[data-id="${book.id}"]`);

    const markup = bookTemplate(res);

    oldBook.insertAdjacentHTML('afterend', markup);

    oldBook.remove();
  });

  e.target.reset();
}

function onBookReset(e) {
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

  resetBook(id, book).then(res => {
    const oldBook = document.querySelector(`.book-item[data-id="${id}"]`);

    const markup = bookTemplate(res);

    oldBook.insertAdjacentHTML('afterend', markup);

    oldBook.remove();
  });
  e.target.reset();
}

function onBookDelete(e) {
  if (!e.target.dataset.type) return;
  const id = e.target.dataset.id;
  deleteBook(id).then(() => {
    const li = e.target.closest('li');
    li.remove();
  });
  e.target.reset();
}

//!===============================================================

getAllBooks().then(data => {
  const markup = booksTemplate(data);
  refs.bookListElem.innerHTML = markup;
});

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
