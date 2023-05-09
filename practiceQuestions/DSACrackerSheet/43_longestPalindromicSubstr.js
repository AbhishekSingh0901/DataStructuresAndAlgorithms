//* Longest Palindrome in a String

/**Given a string S, find the longest palindromic substring in S. 
 * Substring of string S: S[ i . . . . j ] where 0 ≤ i ≤ j < len(S). 
 * Palindrome string: A string which reads the same backwards. 
 * More formally, S is palindrome if reverse(S) = S. 
 * Incase of conflict, return the substring which occurs first ( with the least starting index).


Example 1:

Input:
S = "aaaabbaa"
Output: aabbaa
Explanation: The longest Palindromic
substring is "aabbaa".
Example 2:

Input: 
S = "abc"
Output: a
Explanation: "a", "b" and "c" are the 
longest palindromes with same length.
The result is the one with the least
starting index. */

const longestPalin = (str) => {
  let result = ""
  let resLength = 0

  for (let i = 0; i < str.length; i++) {
    //odd
    let l = i
    let r = i
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      if (r - l + 1 > resLength) {
        result = str.slice(l, r + 1)
        resLength = r - l + 1
      }
      l--
      r++
    }

    //even
    l = i
    r = i + 1
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      if (r - l + 1 > resLength) {
        result = str.slice(l, r + 1)
        resLength = r - l + 1
      }
      l--
      r++
    }
  }
  return result
}

console.log(longestPalin("aaaabbaa"))
console.log(longestPalin("abbc"))
console.log(longestPalin("abc"))
