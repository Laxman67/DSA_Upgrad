// Array based
class Stack {
  constructor(value) {
    this.items = [];
  }

  //   push(Item), pop(),isEmpty(),top(),printStack()

  push(val) {
    this.items.push(val);
  }

  pop() {
    if (this.items.length === 0) {
      console.log(" 'Underflow'");
    }
    if (this.items.length) {
      this.items.splice(this.items.pop());
    }
  }
  isEmpty() {
    return this.items.length === 0;
  }
  top() {
    if (this.items.length == 0) {
      console.log('NO ITEMS in the list');
    } else {
      console.log(this.items[this.items.length - 1]);
    }
  }

  printStack() {
    console.log(this.items);
  }
}

let stack = new Stack();
stack.top();
stack.push(1);

stack.push(78);
console.log(stack.isEmpty());
stack.push('65');
stack.top();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack.isEmpty());

stack.printStack();
