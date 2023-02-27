const factorial = function (N) {
  let arr = [];
  let factor = 1;
  let str = "";
  while (N > 1) {
    factor *= N;
    N--;
    // console.log(factor);
  }
  while (factor >= 1) {
    let mod = factor % 10;
    arr.unshift(mod);
    factor = parseInt(factor / 10);
  }
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
};

console.log(factorial(5));
