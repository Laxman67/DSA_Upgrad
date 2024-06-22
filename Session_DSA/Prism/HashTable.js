class HashTable {
  constructor(size) {
    this.size = size;
    this.values = {};
  }

  calculateHash(value) {
    return value % this.size;
  }

  add(value) {
    var hash = this.calculateHash(value);
    if (this.values[hast] === undefined) {
      this.values[hash] = value;
    } else {
      var iters = 0;
      while (this.values[hast] !== undefined && iters <= this.size) {
        hash++;
        hash = hash % this.size;
        iters++;
      }

      if (iters > this.size) {
        throw new Error('StackOverflow');
      } else {
        this.values[hash] = value;
      }
    }
  }
}

let hash = new HashTable(10);
