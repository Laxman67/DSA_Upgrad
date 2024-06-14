class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
  }
  push(val) {
    var inNode = new Node(val, this.top);
    this.top = inNode;
    this.size++;
  }
  peek() {
    if (this.size > 0) {
      return this.top.value;
    } else {
      console.log('Stack underflow');
    }
  }
  pop() {
    if (this.size > 0) {
      let returnValue = this.top.value;
      this.top = this.top.next;
      this.size--;
    } else {
      console.log('Stack underflow');
    }
  }
  isEmpty() {
    if (this.size === 0) return true;
    else return false;
  }

  print() {
    var holder = this.top;
    while (holder.next !== null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}

var s = new Stack();
s.push(1);
s.pop();
s.push(12);
s.push(90);

s.print();

console.log('Top value', s.top.value);
