//MaxHeap:
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentidx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentidx];
      if (element < parent) break;

      this.values[parentidx] = element;
      this.values[idx] = parent;
      idx = parentidx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    //Bubble down:
    this.sinkDown();
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild > element) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.values);

console.log(heap.extractMax());
console.log(heap.values);

//* Priority Queue:
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentidx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentidx];
      if (element.priority <= parent.priority) break;
      this.values[parentidx] = element;
      this.values[idx] = parent;
      idx = parentidx;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    //Bubble down:
    this.sinkDown();
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild.priority > element.priority) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

let pQueue = new PriorityQueue();
pQueue.enqueue(41, 0);
pQueue.enqueue(39, 1);
pQueue.enqueue(33, 2);
pQueue.enqueue(18, 3);
pQueue.enqueue(27, 4);
pQueue.enqueue(12, 5);
pQueue.enqueue(55, 6);

console.log(pQueue.values);
pQueue.dequeue();
console.log(pQueue.values);
pQueue.dequeue();
console.log(pQueue.values);
pQueue.dequeue();
console.log(pQueue.values);
