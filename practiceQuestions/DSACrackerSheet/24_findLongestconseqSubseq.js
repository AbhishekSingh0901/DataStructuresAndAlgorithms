// Longest consecutive subsequence

/*Given an array of positive integers. Find the length of the longest sub-sequence 
such that elements in the subsequence are consecutive integers, 
the consecutive numbers can be in any order.
 

Example 1:

Input:
N = 7
a[] = {2,6,1,9,4,5,3}
Output:
6
Explanation:
The consecutive numbers here
are 1, 2, 3, 4, 5, 6. These 6 
numbers form the longest consecutive
subsquence.
Example 2:

Input:
N = 7
a[] = {}
Output:
4
Explanation:
1, 2, 3, 4 is the longest
consecutive subsequence.
*/

const findLongestSubseq = function (arr, n = arr.length) {
  let m = new Set(arr);
  let maxcount = 0;
  console.log(m);
  for (let i = 0; i < n; i++) {
    let val = arr[i];

    if (m.has(arr[i] - 1)) continue;
    else {
      let count = 0;
      let curr = arr[i];
      let boole = m.has(curr);
      while (m.has(curr)) {
        count++;
        curr++;
      }

      maxcount = Math.max(maxcount, count);
    }
  }
  return maxcount;
};

console.log(findLongestSubseq([1, 9, 3, 10, 4, 20, 2]));
console.log(findLongestSubseq([4, 3, 2, 100, 99, 1, 98, 102, 101, 103]));
