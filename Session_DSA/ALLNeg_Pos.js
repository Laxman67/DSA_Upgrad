let numbers = [-1, 8, 3, -18, 9, -90];
// one way
// numbers.sort((a, b) => b - a);

// Another

function arrangeNumbers(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArray.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(arrangeNumbers(numbers));
