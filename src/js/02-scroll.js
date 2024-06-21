import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getArticles } from './modules/newsAPI2.js';
import { articlesTemplate } from './templates/render-function2.js';
//!======================================================

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  loadElem: document.querySelector('.js-loader'),
  target: document.querySelector('.js-target'),
};

let query = '';
let currentPage = 1;
let maxPage = 1;

//!======================================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  query = e.target.elements.query.value.trim();
  currentPage = 1;
  showLoader();
  try {
    const data = await getArticles(query, currentPage);
    const markup = articlesTemplate(data.articles);
    refs.articleListElem.innerHTML = markup;
    maxPage = data.total_pages;
  } catch {
    console.log('Error');
  }
  hideLoader();
  updateStatusObserver();
});

async function loadMore() {
  showLoader();
  try {
    currentPage++;
    const data = await getArticles(query, currentPage);
    const markup = articlesTemplate(data.articles);
    refs.articleListElem.insertAdjacentHTML('beforeend', markup);
  } catch {
    console.log('Error');
  }
  hideLoader();
  updateStatusObserver();
}

//!======================================================

function onIntersection(entries) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    loadMore();
  }
}

const observer = new IntersectionObserver(onIntersection, {
  rootMargin: '2500px',
});

function updateStatusObserver() {
  if (currentPage >= maxPage) {
    observer.unobserve(refs.target);
    console.log('remove');
  } else {
    observer.observe(refs.target);
    console.log('add');
  }
}

//!======================================================

function showLoader() {
  refs.loadElem.classList.remove('hidden');
}
function hideLoader() {
  refs.loadElem.classList.add('hidden');
}
