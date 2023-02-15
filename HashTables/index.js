// //Writing our first hash function:
// function hash(key, arrayLength) {
//   let total = 0;
//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLength;
//   }
//   return total;
// }

// //improved function:
// function hash(key, arrayLength) {
//   let total = 0;
//   let primeNum = 71;
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total * primeNum + value) % arrayLength;
//   }
//   return total;
// }

//implementing HashTables:

class HashTables {
  constructor(size = 53) {
    //better to  have size Prime
    this.keyMap = new Array(size);
  }

  hashing(key) {
    let total = 0;
    let primeNum = 71;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * primeNum + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.hashing(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this.hashing[key];
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
      return undefined;
    }
  }

  values() {
    let valueArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valueArr.includes(this.keyMap[i][j][1]))
            valueArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valueArr;
  }

  keys() {
    let keyArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyArr.includes(this.keyMap[i][j][0]))
            keyArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keyArr;
  }
}
