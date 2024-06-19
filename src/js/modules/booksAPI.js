import Axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers = {
//   API: 'Hello test',
// };
// axios.defaults.params = {
//   param1: 'Hello',
//   param2: 'Hello2',
// };

const axios = Axios.create({
  baseURL: 'http://localhost:3000/books',
  headers: {
    'X-RapidAPI-Host': 'awdawdawdawdawd',
  },
  params: {},
});

//!======================================================
/* const BASE_URL = 'http://localhost:3000';
export function getAllBooks() {
  const END_POINT = '/books';
  const url = `${BASE_URL}${END_POINT}`;

  const params = {};
  const headers = {};

  return fetch(url).then(res => res.json());
}
export function createBook(book) {
  const END_POINT = '/books';
  const url = BASE_URL + END_POINT;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(book),
  };

  return fetch(url, options)
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    });
}
export function updateBook({ id, ...book }) {
  console.log(book);
  const END_POINT = '/books';
  const url = `${BASE_URL}${END_POINT}/${id}`;

  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(book),
  };
  return fetch(url, options)
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    });
}
export function resetBook(id, book) {
  const END_POINT = '/books';
  const url = `${BASE_URL}${END_POINT}/${id}`;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(book),
  };

  return fetch(url, options)
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    });
}
export function deleteBook(id) {
  const END_POINT = '/books';
  const url = `${BASE_URL}${END_POINT}/${id}`;

  const options = {
    method: 'DELETE',
  };

  return fetch(url, options);
} */
//!======================================================

export async function getAllBooks() {
  try {
    const res = await axios.get('');
    return res.data;
  } catch (err) {
    console.log('server error', err);
  }
}

export async function createBook(book) {
  const res = await axios.post('', book);
  return res.data;
}

export async function updateBook({ id, ...book }) {
  const res = await axios.patch(`/${id}`, book);
  return res.data;
}

export async function resetBook({ id, ...book }) {
  const res = await axios.put(`/${id}`, book);
  return res.data;
}

export async function deleteBook(id) {
  const res = await axios.delete(`/${id}`);
  return res.data;
}
