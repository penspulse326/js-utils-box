// 防抖是用來阻止某些行為被連續觸發
// 如果連續觸發則只會執行最後一次
// 原理是透過 closure + setTimeout + clearTimeout 來實現
// 此 closure 回傳的函式會檢查 timer 儲存的 setTimeout id
// 重新賦予 timer 時利用 apply 可以同時執行任務並重新綁定對象和帶入 args 增加擴充性

export function debounce(fn, delay = 300) {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
