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
      return returnValue;
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

// Palindrome Check

let reverseString = new Stack();
let testSting = 'racecar';

for (let i = 0; i < testSting.length; i++) {
  reverseString.push(testSting[i]);
}

let valid = true;

let i = 0;

while (reverseString.size > 0 && valid) {
  let charVal = reverseString.pop();
  console.log(charVal);
  if (charVal !== testSting[i]) {
    valid = false;
  }
  i++;
}

console.log(valid);
