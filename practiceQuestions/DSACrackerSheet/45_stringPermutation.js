const stringPermutation = (str, left, right) => {
  if (left === right) {
    console.log(str);
  } else {
    for (let i = left; i <= right; i++) {
      let string = str.split("");
      [string[left], string[i]] = [string[i], string[left]];
      str = string.join("");
      stringPermutation(str, left + 1, right);
    }
  }
};

const string = "abc";
stringPermutation(string, 0, 2);
