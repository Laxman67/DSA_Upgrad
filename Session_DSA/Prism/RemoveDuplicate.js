const HashTable = require('../Prism/HashTable');

var arr = [1, 2, 3, 3, 4, 4, 5];
var hastTable = new HashTable(251);
var retArr = [];

for (var i = 0; i < arr.length; i++) {
  var item = arr[i];
  if (!hastTable.contains(item)) {
    retArr.push(item);
    hastTable.add(item);
  }
}
console.log(retArr);
