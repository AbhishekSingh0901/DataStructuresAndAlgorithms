// let NO_OF_CHARS = 256;
// const findDuplicatateChar = (str) => {
//   let countArr = new Array(NO_OF_CHARS);
//   countArr.fill(0);

//   for (let s of str) {
//     countArr[s.charCodeAt()]++;
//   }
//   console.log(countArr);
//   for (let i = 0; i < NO_OF_CHARS; i++) {
//     if (countArr[i] > 1) console.log(String.fromCharCode(i));
//   }
// };

// findDuplicatateChar("Abhishek");

const printDups = (str) => {
  const count = new Map();
  for (let s of str) {
    count.has(s) ? count.set(s, count.get(s) + 1) : count.set(s, 1);
  }

  for (let [char, val] of count) {
    if (val > 1) {
      console.log(char);
    }
  }
};

printDups("Abhishekbazinga");
