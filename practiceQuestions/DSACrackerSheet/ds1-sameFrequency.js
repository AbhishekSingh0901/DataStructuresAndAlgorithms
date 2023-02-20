// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = function (num1, num2) {
  let counter = Freqobject(num1);
  while (num2 > 1) {
    let numkey = num2 % 10;
    if (!counter[numkey]) return false;
    else {
      counter[numkey]--;
    }
    num2 = parseInt(num2 / 10);
  }
  return true;
};

const Freqobject = function (num) {
  let myobject = {};
  while (num >= 1) {
    let val = num % 10;
    myobject[val] = ++myobject[val] || 1;
    num = parseInt(num / 10);
  }
  return myobject;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 12));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
