// Sort an array of 0s, 1s and 2s
/*Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.


Example 1:

Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.
*/

const sortArr = function (arr, N) {
  let i;
  let a = 0;
  let b = 0;
  let c = 0;
  for (i = 0; i < N; i++) {
    if (arr[i] === 0) {
      a++;
    } else if (arr[i] === 1) {
      b++;
    } else c++;
  }

  for (let i = 0; i < N; i++) {
    if (i < a) {
      arr[i] = 0;
    } else if (i >= a && i < a + b) {
      arr[i] = 1;
    } else arr[i] = 2;
  }

  return arr;
};

console.log(sortArr([1, 0, 2, 0, 1, 2, 1, 0], 8));

//another Approach
function sort012(a, arr_size) {
  let lo = 0;
  let hi = arr_size - 1;
  let mid = 0;
  let temp = 0;
  // Iterate till all the elements
  // are sorted
  while (mid <= hi) {
    // If the element is 0
    if (a[mid] == 0) {
      temp = a[lo];
      a[lo] = a[mid];
      a[mid] = temp;
      lo++;
      mid++;
    }
    // If the element is 1
    else if (a[mid] == 1) {
      mid++;
    }
    // If the element is 2
    else {
      temp = a[mid];
      a[mid] = a[hi];
      a[hi] = temp;
      hi--;
    }
  }
  return a;
}

console.log(sort012([1, 0, 2, 0, 1, 2, 1, 0], 8));
