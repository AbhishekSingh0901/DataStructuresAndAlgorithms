const printAllSubsequence = (input, output = "") => {
  if (input.length === 0) {
    console.log(output)
    return
  }

  //character included
  printAllSubsequence(input.substring(1), output + input[0])

  //character not-included
  printAllSubsequence(input.substring(1), output)
}

printAllSubsequence("abc")
