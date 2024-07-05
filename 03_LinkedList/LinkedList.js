class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    let newNode = new Node(value);
    (this.head = newNode), (this.tail = newNode);
    this.length = 1;
  }

  // Push or Add node to the end of the linked list
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      // not node is null
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Remove from the end of the LinkedList
  pop() {
    if (!this.head) return 'NODE IS NULL';
    let temp = this.head;
    let pre = temp;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
  }

  // Remove the node from the beginning of LinkedList
  shift() {
    if (!this.head) return 'NODE IS NULL';

    let temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return this;
  }
  // add the node to  the beginning of LinkedList
  unshift(value) {
    let newNode = new Node(value);
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
}

let linkedList = new LinkedList(7);
linkedList.push(90);
linkedList.push(70);
linkedList.push(5);
linkedList.shift();
linkedList.shift();
linkedList.shift();
linkedList.shift();
linkedList.push(12);
linkedList.push(7);
linkedList.unshift(1);

console.log(linkedList);
