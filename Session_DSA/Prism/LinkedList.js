class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.front = new Node(null, null);
    this.length = 0;
  }

  insert(val) {
    let newNode = new Node(val, null);
    this.front = newNode;
    this.length++;
  }
}
