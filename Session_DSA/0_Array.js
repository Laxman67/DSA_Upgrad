class Myset {
  constructor() {
    this.items = [];
  }

  push(item) {
    if (!this.items.includes(item)) {
      this.items.push(item);
    } else {
      console.log('Duplicate item: ' + item);
    }
    return this;
  }
  print() {
    return [...this.items];
  }
  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let set = new Myset();
set.push(80);
set.push(8);
set.push(99);
console.log(set.isEmpty());
set.push(19);
set.push(19);

console.log(set.print());
