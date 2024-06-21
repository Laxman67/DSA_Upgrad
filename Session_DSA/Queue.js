class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.queue = {};
    this.frontIndex = 0;
    this.endIndex = 0;
  }
}
