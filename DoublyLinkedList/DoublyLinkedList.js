/*setting up the node
NODE:
  -val
  -next
  -prev
DLL: 
  -head
  -tail
  -length
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const current = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const current = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = current.next;
      this.head.prev = null;
      current.next = null;
    }
    this.length--;
    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.taikl = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    let value;
    if (index < 0 || index >= this.length) return null;
    else if (index <= this.length / 2) {
      value = this.head;
      for (let i = 0; i < index; i++) {
        value = value.next;
      }
    } else {
      value = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        value = value.prev;
      }
    }
    return value;
  }
}

const doublyList = new DoublyLinkedList();
doublyList.push(10);
doublyList.push(20);
doublyList.push(30);
doublyList.push(40);
doublyList.push(50);
doublyList.push(60);
doublyList.push(70);
doublyList.push(80);
doublyList.push(90);
doublyList.push(100);
doublyList.push(110);
doublyList.push(120);
console.log(doublyList.get(3));
console.log(doublyList.get(9));
