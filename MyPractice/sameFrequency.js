function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  let counter1 = {};
  let counter2 = {};
  while (num1 >= 1) {
    let val = num1 % 10;
    counter1[val] = ++counter1[val] || 1;
    num1 = parseInt(num1 / 10);
  }
  while (num2 >= 1) {
    let val = num2 % 10;
    counter2[val] = ++counter2[val] || 1;
    num2 = parseInt(num2 / 10);
  }

  for (let key in counter1) {
    if (!(key in counter2)) {
      return false;
    } else if (counter1[key] !== counter2[key]) {
      // console.log(counter1[key]);
      // console.log(counter2[key]);
      return false;
    }
  }
  return true;
}
console.log(
  // sameFrequency(182, 281), // true
  // sameFrequency(34, 14), // false
  // sameFrequency(3589578, 5879385), // true
  sameFrequency(22, 222) // false
);
