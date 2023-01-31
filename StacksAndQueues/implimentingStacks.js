//Using a linked list

//Creating a node:

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

//Creating a stack:
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let val = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else this.first = val.next;
    this.size--;
    return val.value;
  }
}
