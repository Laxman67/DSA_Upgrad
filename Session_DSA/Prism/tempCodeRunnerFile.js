
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
}

let hash = new HashTable(10);
hash.add(89);