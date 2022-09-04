/*
  1.Understanding the problem
  2.Explore Examples
  3.Break it Down
  4.Solve and simplify
  5.Look back and refactor.


  exapmle - write a function which takes in a string
  and returns counts of each character in the string
  
  1. Uderstanding the problem
    
    - restate : loop through each element in the given string and
      and count how many times each character comes.
    
      -inputs : AlphaNumeric Values ,  spaces , etc.
    
    -output : we only have to count Alphanumric values.
      capital and small same letter should be counted as 1.
    
    - imporatant peices- using loop to iterate over 
    converting uppercase to lower case  
    how to skip over additional values

  2. example - 
    charCount('aaaa)
    a: 4

    charCount('hey how are you Doing!')
    h:2
    e:2
    y:2
    o:3
    w:1
    a:1
    r:1
    d:1
    i:1
    n:1
    g:1

    3.Break it down
*/

function charCount(str) {
  // make object to return
  let object = {};
  //loop over string
  for (char of str) {
    //convert upper to lowercase
    let key = char.toLowerCase();
    // console.log(key);
    //check if alpha/numeric
    if (isAlphanumeric(key)) {
      //check if char key exists in object
      // if (object[key] > 0) {
      //   //yes - count+1
      //   object[key]++;
      // } else {
      //   //no - add with value 1
      //   object[key] = 1;
      // }

      //refactoring
      object[key] = ++object[key] || 1;
    }
  }

  return object;
}

console.log(charCount("Hello There !"));

function isAlphanumeric(char) {
  // return /[a-z0-9]/.test(char);
  //refacotring
  let code = char.charCodeAt(0);
  if ((code > 47 && code < 58) || (code > 97 && code < 123)) {
    return true;
  }
  return false;
}
