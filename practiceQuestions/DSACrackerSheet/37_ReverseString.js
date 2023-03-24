const reverseString = (str) => {
  let start = 0;
  let end = str.length - 1;
  str = str.split("");
  while (start < end) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }
  str = str.join("");
  return str;
};
console.log(reverseString("Hello"));
