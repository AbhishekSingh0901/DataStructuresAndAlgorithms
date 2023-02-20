//Write a function called isSubsequence which takes in two strings and checks whether
//the characters in the first string form a subsequence of the characters in the second string.
//In other words, the function should check whether the characters in the first string appear somewhere in
//the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

const isSubsequence = function (str1, str2) {
  if (!str1) return false;
  if (str2 > str1) {
    let i = 0;
    let j = 0;

    while (i < str2.length) {
      if (str2[i] === str1[j]) j++;
      if (j === str1.length) return true;
      i++;
    }
    return false;
  }
};
console.log(
  isSubsequence("hello", "hello world"), // true
  isSubsequence("sing", "sting"), // true
  isSubsequence("abc", "abracadabra"), // true
  isSubsequence("abc", "acb")
); // false (order matters);
