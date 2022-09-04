/*Given 2 strings, write a function to determine if the second
is an anagram of first. An anagram is a word, phrase, or name
formed by rearranging the letters of another, such as cinema, formed
from iceman */

//uderstood the problem
/* -take two strings as input of a fucntion
   -check if length of the strings is same
   -use the frequency counter pattern
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = new Object();
  let frequencyCounter2 = new Object();

  for (let val of str1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  }

  for (key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  // console.log(frequencyCounter1);
  // console.log(frequencyCounter2);
  return true;
}

//Another appraoch instructor

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let value of first) {
    lookup[value] ? (lookup[value] += 1) : (lookup[value] = 1);
  }

  for (let value of second) {
    if (!lookup[value]) {
      return false;
    } else {
      lookup[value] -= 1;
    }
  }

  return true;
}
