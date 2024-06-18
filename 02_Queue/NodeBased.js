class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = new Node(null, null);
    this.rear = new Node(null, null);
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.size == 0) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size == 0) {
      return undefined;
    } else {
      let val = this.front.value; // asign node that to be remove
      this.front = this.front.next;
      this.size--;
      return val;
    }
  }
  peek() {
    if (this.size == 0) throw new Error('Stack underflow');
    else {
      console.log(`Peeking FRONT Value: ${this.front.value}`);
    }
  }

  isEmpty() {
    return this.size == 0;
  }

  print() {
    let holder = this.front;

    while (holder.next !== null) {
      console.log(holder.value);
      holder = holder.next;
    }
    // Get the rear value
    console.log(this.rear.value);
  }
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(12);
queue.enqueue(9);
queue.enqueue(67);
queue.enqueue(1);
queue.peek();
console.log(queue.isEmpty());
queue.dequeue();
console.log(queue);

queue.print();
