import axios from 'axios';

export async function getArticles(query, currentPage) {
  const BASE_URL = 'https://free-news.p.rapidapi.com/v1';
  const END_POINT = '/search';
  const url = `${BASE_URL}${END_POINT}`;

  const headers = {
    'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'free-news.p.rapidapi.com',
  };

  const params = {
    lang: 'en',
    q: query,
    page_size: 15,
    page: currentPage,
  };

  const res = await axios.get(url, { params, headers });
  return res.data;
}
