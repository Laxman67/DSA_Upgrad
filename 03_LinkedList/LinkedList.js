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
    this.head = temp.next; // orthis.head = this.head.next
    temp.next = null;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return temp;
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

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    let temp = this.get(index); // this will get the node present OR not

    if (temp) {
      // This is execute when node is available
      temp.value = value; // set the value
      return true; // come out of the function to stop execution
    }
    // return false if the node is not in the LL
    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) return this.unshift(value);
    if (index == this.length) return this.push(value);

    const newNode = new Node(value); // newNode
    const temp = this.get(index - 1); //it will get the node previous to the current-1

    temp.next = newNode;
    newNode.next = temp.next;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();

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

    let next = temp.next;
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

let linkedList = new LinkedList(16);
linkedList.push(7);
linkedList.push(91);
linkedList.reverse();

console.log(linkedList);
