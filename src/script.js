import fetchData from './utils/fetch.js';
import render from './utils/render.js';
import checkup from './utils/checkup.js';

const data = await fetchData();
render(data);

const body = document.querySelector('body');
const greeting = document.querySelector('.greeting');

const main = document.querySelector('.main_content');

const alert = document.querySelector('.alert');
const alertContent = document.querySelector('.alert_content');
const overlay = document.getElementById('overlay');
const popup = document.querySelector('.popup');
const popupCheckup = document.querySelector('.popup_checkup');

setTimeout(() => {
  body.removeChild(greeting);
  main.classList.add('show');
}, 3500);

setTimeout(() => {
  alert.classList.remove('hidden');
  alertContent.classList.add('fadeInDown');
}, 6500);

setTimeout(() => {
  overlay.classList.remove('hidden');
  overlay.classList.add('active');
  popup.classList.remove('hidden');
}, 8000);

setTimeout(() => {
  alertContent.classList.remove('fadeInDown');
  alertContent.classList.add('fadeOutUp');
}, 11000);

popupCheckup.addEventListener('click', () => {
  checkup();
});
