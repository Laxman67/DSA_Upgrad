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

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  shift() {
    if (this.length === 0) return 'stack Undeflow';
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  print() {
    let temp = this.head;
    let i = 0;

    // run till this.head is not null
    while (temp) {
      console.log(`${i} :=> ${temp.value}`);
      temp = temp.next;
      i++;
    }
  }
}

let dll = new DoublyLinkedList(1);
dll.push(2);
dll.push(9);
console.log(dll.shift());
console.log(dll);
