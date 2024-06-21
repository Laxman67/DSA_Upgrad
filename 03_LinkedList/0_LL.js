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
      //if  temp.next = means node is available

      pre = temp; // pre will be what temp was before and =>
      temp = temp.next; // temp will point to next node
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

    // if there is no more node left because head is already null, tail=?
    if (this.length == 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    // Case 1 : If index is negative or greater than or equal to  length of LL
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      // we are going to index by 0 and less than 1
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    // if index is ZERO =0
    if (index === 0) return this.unshift(value);

    // if the index is equal to the length of the LL
    if (index == this.length) return this.push(value);

    // If index is out of bounds
    if (index < 0 || index >= this.length) return false;

    const newNode = new Node(value);
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    if (index <= 0 || index >= this.length) return undefined;

    let before = this.get(index - 1);
    let temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next; // next of head
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }
}

let myList = new LinkedList(1);
myList.push(2);
myList.push(3);
console.log(myList.get(2));
