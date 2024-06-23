class HashTable {
  constructor(size) {
    this.size = size;
    this.values = {};
  }

  calculateHash(value) {
    return value % this.size;
  }

  add(value) {
    var hash = Math.floor(this.calculateHash(value));

    if (this.values[hash] === undefined) {
      this.values[hash] = value;
    } else {
      var iters = 0;
      while (this.values[hash] !== undefined && iters <= this.size) {
        hash++;
        hash = hash % this.size;
        iters++;
      }
      if (iters > this.size) {
        console.log('Stack overflow');
      } else {
        this.values[hash] = value;
      }
    }
  }

  contains(value) {
    let hash = this.calculateHash(value);
    if (this.values[hash] === value) {
      return true;
    } else {
      var iters = 0;
      while (this.values[hash] !== undefined && iters <= this.size) {
        hash++;
        hash = hash % this.size;
        iters++;
      }
      if (this.values[hash] === value) {
        return true;
      } else {
        return false;
      }
    }
  }

  print() {
    console.dir(this.values);
  }
}
module.exports = HashTable;

// let hash = new HashTable(10);
// hash.add(89);
// hash.add(9);
// hash.add(99);
// hash.add(30);
// hash.add(40);
// hash.add(50);
// hash.add(1485);

// hash.add(10000);
// hash.add(1014);
// hash.add(887);

// console.log(hash.contain(887));
// hash.print();
