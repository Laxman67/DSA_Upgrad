const Stack = require('./ArrayBased_Stack');
let nums1 = [2, 1, 3, 4, 5];
let nums2 = [2, 4, 3, 5, 1];
let nums3 = [6, 8, 2, 4];

function nextGreaterElement(nums) {
  let monoStack = new Stack();
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length + 1; j++) {
      if (nums[i] > nums[j]) {
        monoStack.push(nums[i]);
      }
    }
  }
  return monoStack;
}

console.log(nextGreaterElement(nums1));
