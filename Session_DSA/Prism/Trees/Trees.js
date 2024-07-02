class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // (newNode.data > node.data)
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  insert(data) {
    let newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  inOrderRec(node) {
    if (node !== null) {
      this.inOrderRec(node.left);
      console.log(node.data);
      this.inOrderRec(node.right);
    } else {
      return;
    }
  }
  inOrder() {
    this.inOrderRec(this.root);
  }
}
