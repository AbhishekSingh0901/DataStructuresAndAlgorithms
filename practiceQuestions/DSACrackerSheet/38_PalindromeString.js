const isPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) return 0;
    start++;
    end--;
  }
  return 1;
};
