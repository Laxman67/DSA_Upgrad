class Stack {
  constructor() {
    this.stack = [];
  }

  //   empty or
  isEmpty() {
    if (this.stack.length === 0) return false;
    else true;
  }
  size() {
    return this.stack.length;
  }

  //   Push into Stack
  push(val) {
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

// Check balanced Bracket
console.log('Checking balanced Bracket');

let bracketStack = new Stack();
let testString = '(1+2)';
let valid = true;
let i = 0;

while (i <= testString.length && valid) {
  let charVal = testString.charAt(i);

  if (charVal == '(') {
    bracketStack.push(charVal);
    bracketStack.print();
  } else if (charVal == ')') {
    if (bracketStack.isEmpty()) {
      valid = false;
    } else {
      bracketStack.print();
      bracketStack.pop();
      valid = true;
      console.log(true);
      bracketStack.print();
    }
  }

  i++;
}

if (!bracketStack.isEmpty()) {
  valid = false;
}

console.log(valid);
