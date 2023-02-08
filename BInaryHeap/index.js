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

  extractMac() {
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

console.log(heap.extractMac());
console.log(heap.values);
