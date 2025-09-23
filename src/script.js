import fetchData from './utils/fetch.js';
import render from './utils/render.js';

const data = await fetchData();
render(data);

const body = document.querySelector('body');
const greeting = document.querySelector('.greeting');

const main = document.querySelector('.main-content');

setTimeout(() => {
  body.removeChild(greeting);
  main.classList.add('show');
}, 3500);
