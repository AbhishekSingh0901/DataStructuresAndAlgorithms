const shuffleCheck = (str1, str2, result) => {
  if (str1.length + str2.length !== result.length) return false;

  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  result = result.split("").sort().join("");

  let i = 0;
  let j = 0;
  let k = 0;

  while (k < result.length) {
    if (i < str1.length && str1[i] === result[k]) i++;
    else if (j < str2.length && str2[j] === result[k]) j++;
    else return false;
    k++;
  }

  return true;
};

// console.log(shuffleCheck("abc", "123", "a1b2c3"));
console.log(shuffleCheck("bad", "boys", "bbaosyd"));
