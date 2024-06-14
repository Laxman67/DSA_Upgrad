class Stack {
  constructor() {
    this.stack = [];
  }

  //   empty or
  isEmpty() {
    if (this.stack.length === 0) {
      console.log('Empty');
    } else {
      console.log('Not Empty');
    }
  }
  size() {
    return this.stack.length;
  }

  //   Push into Stack
  pus(val) {
    this.stack.push(val);
  }

  pop() {
    if (this.stack.length > 0) {
      this.stack.pop();
    } else {
      console.log('Stack underflow detected');
    }
  }
  peek() {
    // Return the last or top most  element
    if (this.stack.length > 0) {
      console.log(this.stack[this.stack.length - 1]);
    } else {
      console.log('Stack underflow detected');
    }
  }

  print() {
    console.log(this.stack);
  }
}

let s = new Stack();
s.isEmpty();
s.pus(1);
s.pus(90);
s.peek();
s.isEmpty();
s.pus(1121);

s.print();
s.pop();
s.pop();
s.pop();
s.pop();
