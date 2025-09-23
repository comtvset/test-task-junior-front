const body = document.querySelector('body');
const greeting = document.querySelector('.greeting');

const main = document.querySelector('.main-content');

setTimeout(() => {
  body.removeChild(greeting);
  main.classList.add('show');
}, 3500);
