const countAndSay = (n) => {
  if (n === 1) return "1";
  if (n === 2) return "2";
  let s = "11";
  for (let i = 3; i <= n; i++) {
    let t = "";
    s = s + "&";
    let count = 1;
    for (let j = 1; j < s.length; j++) {
      if (s[j] !== s[j - 1]) {
        t = t + count;
        t = t + s[j - 1];
        count = 1;
      } else count++;
    }
    s = t;
  }

  return s;
};

console.log(countAndSay(4));
console.log(countAndSay(5));
