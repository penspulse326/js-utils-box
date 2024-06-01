import { debounce } from './utils/debounce';
const fn = () => console.log('hihi');
const sayHi = debounce(fn);
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  sayHi();
});
