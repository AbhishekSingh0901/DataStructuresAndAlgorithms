//Implementing a node:

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.sze = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
  dequeue() {
    const node = this.head;
    if (this.size === 0) return null;
    else if (this.sze === 1) {
      this.first = null;
      this.last = null;
    } else this.head = node.next;
    this.size--;
    return node.value;
  }
}
