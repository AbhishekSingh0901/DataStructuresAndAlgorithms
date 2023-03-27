//Naive Approach:

// const checkRotaion = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let q1 = [];
//   let q2 = [];
//   for (let i = 0; i < str1.length; i++) {
//     q1.push(str1[i]);
//     q2.push(str2[i]);
//   }
//   console.log(q1, q2);
//   let k = str2.length;
//   while (k > 0) {
//     let curr = q2[0];
//     q2.shift();
//     q2.push(curr);
//     if (JSON.stringify(q2) === JSON.stringify(q1)) return true;
//     k--;
//   }
//   return false;
// };

// console.log(checkRotaion("abcd", "cdba"));

//Optimised Solution:

const checkRotaion = (str1, str2) => {
  return str1.length === str2.length && (str1 + str1).indexOf(str2) != -1;
};

console.log(checkRotaion("abcd", "cdab"));
