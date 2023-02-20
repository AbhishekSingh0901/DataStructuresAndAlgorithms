// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

//Solution 1: using Frequency counter:
const areThereDuplicates1 = function (...args) {
  const counter = {};
  for (let val of args) {
    counter[val] = ++counter[val] || 1;
  }
  for (let key in counter) {
    if (counter[key] > 1) return true;
  }
  return false;
};
console.log(areThereDuplicates1(1, 2, 3));
console.log(areThereDuplicates1(1, 2, 2));
console.log(areThereDuplicates1("a", "b", "c", "a"));

//Solution 2 using: sorting and mutliplePointers:

const areThereDuplicates2 = function (...args) {
  args.sort((a, b) => a > b);
  for (let i = 0; i < args.length - 2; i++) {
    if (args[i] === args[i + 1]) return true;
  }
  return false;
};
console.log("-----------------------------------");

console.log(areThereDuplicates1(1, 2, 3));
console.log(areThereDuplicates1(1, 2, 2));
console.log(areThereDuplicates1("a", "b", "c", "a"));

//solution 3: 1 line solution using Sets

const areThereDuplicates3 = function (...args) {
  const mySet = new Set(args);
  return mySet.size !== args.length;
};

console.log("-----------------------------------");

console.log(areThereDuplicates1(1, 2, 3));
console.log(areThereDuplicates1(1, 2, 2));
console.log(areThereDuplicates1("a", "b", "c", "a"));
