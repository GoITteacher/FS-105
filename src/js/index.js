import axios from 'axios';
/* async function getPokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon';

  const response1 = await fetch(url);
  const data1 = await response1.json();

  console.log(data1);

  const url2 = data1.results[0].url;
  const res2 = await fetch(url2);
  const pokemon = await res2.json();

  console.log(pokemon);
}
getPokemons(); */

//!======================================================

// async function test() {
//   const promise = await Promise.resolve('Hello world');

//   console.log(promise);
// }

// test();

//!======================================================

// async function foo() {}

// const arrow = async data => {};

// const user = {
//   async showInfo() {},
// };

// class Test {
//   async showInfo() {}
// }

// document.addEventListener('click', async () => {});

//!======================================================

// async function getPokemon() {
//   const url = 'https://pokeapi.co/api/v2/pokemon';
//   const res = await fetch(url);
//   const data = await res.json();

//   return data;
// }

// const pokemons = getPokemon();

//!======================================================

// async function getArr() {
//   return 'Hello world';
// }

// const res = getArr();

// console.log(res);

//!======================================================

// async function getPokemons() {
//   const url = 'https://pokeapi.co/api/v2/pokemon';
//   try {
//     const response1 = await fetch(url);
//     const data1 = await response1.json();
//     const url2 = data1.results[0].url;
//     const res2 = await fetch(url2);
//     const pokemon = await res2.json();
//     return pokemon;
//   } catch (err) {
//     console.log(err);
//   }
// }

//!======================================================

// async function test() {
//   try {
//     const res = await fetch('');
//     console.log();
//   } catch {
//     console.log(err);
//   }
// }

//!======================================================
/* async function getPokemonById(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  return pokemon;
} */

/* async function getPokemons() {
  const promises = [];
  for (let i = 1; i <= 100; i++) {
    const pokemonPromise = getPokemonById(i);
    promises.push(pokemonPromise);
  }

  const result = await Promise.all(promises);
  console.log(result);
}

getPokemons(); */

//!======================================================

async function getNews(param1) {
  const baseURL = 'https://newsapi.org/v2';
  const endPoint = '/everything';
  const url = baseURL + endPoint;

  const params = {
    q: param1,
    language: 'en',
  };

  const headers = {
    'X-Api-Key': 'c8747511a2c34730a83caaff4f3693e7',
  };

  const res = await axios.get(url, { headers, params });
  return res.data;
}

getNews('Bitcoin');
getNews('USDT');
