class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    let newNode = new Node(value);
    this.top = newNode;
    this.lenght = 1;
  }

  //   Borrowing unshift Method from LinkedList
  push(value) {
    let newNode = new Node(value);
    if (this.lenght === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.lenght++;
    return this;
  }

  pop() {
    if (this.lenght === 0) return false;

    let temp = this.top;
    this.top = temp.next; //can be  ==> this.top.next
    temp.next = null;
    this.lenght--;
    return temp;
  }
}

let stack = new Stack(5);
stack.push(12);
stack.push(6);
console.log('POP-> :', stack.pop());
console.log('POP-> :', stack.pop());
console.log('POP-> :', stack.pop());
console.log('POP-> :', stack.pop()); // False
console.log(stack);
