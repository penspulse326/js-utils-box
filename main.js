import { debounce } from './utils/debounce';
const fn = () => console.log('hihi');
const sayHi = debounce(fn);
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  sayHi();
});

const bao = function () {
  console.log(123);
  let a = 0;
  return function () {
    console.log(a);
    console.log('我是回傳的函式');
  };
};

const baobao = bao();
baobao();
