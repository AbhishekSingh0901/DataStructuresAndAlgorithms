const palinArray = (arr, n = arr.length) => {
  for (let i = 0; i < n; i++) {
    let sol = 0;
    let temp = arr[i];
    while (temp > 0) {
      let digit = temp % 10;
      sol = sol * 10 + digit;
      temp = Math.floor(temp / 10);
    }
    if (sol != arr[i]) return 0;
  }
  return 1;
};
