class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      // If LL is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // point newnode to the tail.next of the current node
      this.tail = newNode; // tail will be point to newnode
    }
    this.length++;
    return this;
  }

  pop() {
    // Case : Empty node
    if (!this.head) return undefined; // if head is pointing to (null or Empty ) node

    // Case : More than one node

    // temp and pre for iterating each node
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    // If there is ONE node left
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);

    // If LL is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    // Remove node ftom begining
    // Case : If there is ZERO Node
    if (!this.head) return undefined;

    // Case 1 0r more  nodes
    let temp = this.head; // temporary = store head node
    this.head = this.head.next; // assign head to a new node next to it
    temp.next = null; // temporary.next = null to unlink the node
    this.length--;

    if (this.length == 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
}

let myList = new LinkedList(10);
console.log(myList.push(18));
console.log(myList.push(11));
console.log(myList.pop());
console.log(myList.pop());
console.log(myList.unshift(100));
