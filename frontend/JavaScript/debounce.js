const printName = (name) => {
    console.log(name);
}

const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const debouncedSearch = debounce(printName, 2000);

debouncedSearch('Satish Rai');
debouncedSearch('new string');