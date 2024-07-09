class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor(value) {
    let newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.lenght = 1;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.lenght == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.lenght++;
    return this;
  }

  dequeue() {
    if (this.lenght === 0) return false;

    let temp = this.first;
    if (this.lenght === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
      temp.next = null;
    }
    this.lenght--;
    return temp;
  }
}

let myQueue = new Queue(7);
myQueue.enqueue(90);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

console.log(myQueue);
