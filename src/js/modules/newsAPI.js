import axios from 'axios';

const articlesApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': 'c8747511a2c34730a83caaff4f3693e7',
  },
});
export async function getArticles(query, currentPage) {
  const params = {
    q: query,
    page: currentPage,
    language: 'en',
    sortBy: 'popularity',
    pageSize: 10,
  };

  const res = await articlesApi.get('/everything', { params });
  return res.data;
}
