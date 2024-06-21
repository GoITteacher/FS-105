import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getArticles } from './modules/newsAPI.js';
import { articlesTemplate } from './templates/render-functions.js';
//!======================================================

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};

let query = '';
let currentPage = 1;
let maxPage = 1;
const perPage = 10;

//!======================================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  query = e.target.elements.query.value.trim();

  if (!query) {
    showError('Error query');
    return;
  }

  currentPage = 1;
  showLoader();
  hideLoadBtn();

  try {
    const data = await getArticles(query, currentPage);
    maxPage = Math.ceil(data.totalResults / perPage);

    if (maxPage === 0) {
      showError('Empty Result');
      hideLoader();
      updateBtnStatus();
      return;
    }

    const markup = articlesTemplate(data.articles);
    refs.articleListElem.innerHTML = markup;
  } catch (err) {
    showError(err);
  }

  hideLoader();
  updateBtnStatus();
});

refs.btnLoadMore.addEventListener('click', async () => {
  currentPage++;
  hideLoadBtn();
  showLoader();

  try {
    const data = await getArticles(query, currentPage);
    const markup = articlesTemplate(data.articles);
    refs.articleListElem.insertAdjacentHTML('beforeend', markup);
    skipOldElement();
  } catch {
    console.log('error');
  }

  hideLoader();
  updateBtnStatus();
});

//!======================================================

function updateBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadBtn();

    if (maxPage) {
      iziToast.info({
        title: 'The End!',
        message: 'End of collection!',
      });
    }
  } else {
    showLoadBtn();
  }
}

function showLoadBtn() {
  refs.btnLoadMore.classList.remove('hidden');
}
function hideLoadBtn() {
  refs.btnLoadMore.classList.add('hidden');
}

function showLoader() {
  refs.loadElem.classList.remove('hidden');
}
function hideLoader() {
  refs.loadElem.classList.add('hidden');
}

function showError(message) {
  iziToast.error({
    title: 'Error',
    message,
  });
}

function skipOldElement() {
  const liElem = refs.articleListElem.children[0];
  const height = liElem.getBoundingClientRect().height;

  scrollBy({
    top: height * 3,
    behavior: 'smooth',
  });
}
