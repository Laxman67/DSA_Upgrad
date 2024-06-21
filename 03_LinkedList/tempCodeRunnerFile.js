  remove(index) {
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    if (index <= 0 || index >= this.length) return undefined;

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

    let next = temp.next; // next of head
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

let myList = new LinkedList(1);
myList.push(2);
myList.push(3);
