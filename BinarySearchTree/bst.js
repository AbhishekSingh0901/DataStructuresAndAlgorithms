// Node:
class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let currnode = this.root;
      while (true) {
        if (val === currnode.value) return undefined;
        if (val < currnode.value) {
          if (currnode.left === null) {
            currnode.left = node;
            return this;
          }
          currnode = currnode.left;
        } else {
          if (currnode.right === null) {
            currnode.right = node;
            return this;
          }
          currnode = currnode.right;
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return false;
    let curr = this.root;
    let found = false;

    while (curr && !found) {
      if (val < curr.val) {
        curr = curr.left;
      } else if (val > curr.val) {
        curr = curr.right;
      } else {
        found = true;
        return curr;
      }
    }
    return undefined;
  }

  bfs() {
    const data = [];
    const queue = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  preOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  postOrder() {
    let data = [];
    // let current = this.root
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  postOrder() {
    let data = [];
    // let current = this.root
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

let myTree = new BinarySearchTree();
myTree.insert(10);
myTree.insert(6);
myTree.insert(15);
myTree.insert(3);
myTree.insert(8);
myTree.insert(20);
console.log(myTree);
console.log(myTree.bfs());
console.log(myTree.postOrder());
