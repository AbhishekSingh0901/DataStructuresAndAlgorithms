const maxSubStr = (str, n = str.length) => {
  let count_0 = 0;
  let count_1 = 0;
  let strCount = 0;

  for (let i = 0; i < n; i++) {
    if (str[i] === "0") {
      count_0++;
    } else {
      count_1++;
    }

    if (count_0 === count_1) {
      strCount++;
    }
  }

  if (count_0 !== count_1) return -1;

  return strCount;
};

console.log(maxSubStr("0100110101"));
console.log(maxSubStr("0111100010"));
console.log(maxSubStr("0011001001"));
