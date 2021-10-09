// Фибоначчи

const getFibByIndex = (() => {
  const cash = {
    0: 0,
    1: 1
  };
    
  return function fib(index, prev = 0, curr = 1, i = 2) {
    
    if(cash[index] === 0) return 0;
    
    if(cash[index]) return cash[index];
    
    if(i < index) return fib(index, curr, curr + prev, ++i);
    
    return cash[index] = curr + prev;
   
  }; 
})();

// Многоуровневый массив =>  Объект

function convertArray(value) {

  Object.keys(value = Object.fromEntries(value)).forEach(key => {

    if(Array.isArray(value[key])) {
      value[key] = convertArray(value[key]);
    }
    
  })
  
  return value;
}
