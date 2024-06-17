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
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined; // if head is pointing to null node
    let temp = this.head;
    let pre = this.head;

    // if there are one or two nodes -> temp and pre for iterating each node
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    // If there is one node left
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
}

let myList = new LinkedList(10);
myList.push(18);
myList.push(11);

console.log(myList);
