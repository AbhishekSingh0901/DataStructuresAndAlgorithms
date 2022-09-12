//Works normally for an array of strings:

let str = ["dog", "cat", "mouse", "deer", "buffalo", "cow", "tiger", "zebra"];
str.sort();
console.log(str);

//Defaul sort method converts numbers to string unicodes code points.
//due to which it does not work dirsctly

let arr = [17, 66, 23, 12, 5, 4, 5];
arr.sort();
console.log(arr); //[12, 17, 23, 4, 5, 5, 66]

//using comparator function:

function numComparator(a, b) {
  //for ascending
  return a - b;

  //for descending
  //return b - a;
}
arr.sort(numComparator);
console.log(arr);
