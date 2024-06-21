class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      // If DLL is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // point newnode to the tail.next of the current node
      newNode.prev = this.tail; // connect with previous node that was tail before
      this.tail = newNode; // tail will be point to newnode
    }
    this.length++;
    return this;
  }
}

let dll = new DoublyLinkedList(90);
dll.push(76);
dll.push(5);
console.dir(dll);
