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
    if (!this.root) this.root = node;
    else {
      let currnode = this.root;
      while (true) {
        if (val === currnode.val) return undefined;
        if (val < currnode.right) {
          if (currnode.left === null) {
            currnode.left = node;
            return this;
          }
          currnode = currnode.left;
        } else if (val > currnode.right) {
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
}
