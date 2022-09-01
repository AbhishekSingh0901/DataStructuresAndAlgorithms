"use strict!";

//checking the performance:

//in case of loops
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// let t1 = performance.now();

// addUpTo(100000000);

// let t2 = performance.now();

// console.log(`time taken in task: ${(t2 - t1) / 1000} seconds`);

//in case of formula

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

// let t1 = performance.now();

// addUpTo2(100000000);

// let t2 = performance.now();

// console.log(`time taken in task: ${(t2 - t1) / 1000} seconds`);

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

//space complexity O(1)

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

//space complexity O(n)
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

console.log(double([1, 2, 3, 4]));
