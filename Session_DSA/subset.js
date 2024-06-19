let arrA = [1, 5, 9];
let arrB = [1, 3, 5, 3, 9];

function findSubset(arrA, arrB) {
  let valid = false;

  for (let i = 0; i < arrA.length; i++) {
    if (arrB.includes(arrA[i])) {
      valid = true;
    } else {
      valid = false;
      break;
    }
  }
  return valid;
}

console.log(`Array A is a Subset of Array B ? =:::=> ${
  findSubset(arrA, arrB) ? 'YES ' : 'NO'
} 
  `);
