function hasSubarrayWithSum(arr, target) {
  let start = 0; 
  let currentSum = 0;

  
  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    if (currentSum > target) {
      currentSum -= arr[start];
      start += 1; 

    
      if (currentSum > target) {
        currentSum -= arr[start];
        start += 1;
      }
    }

    if (currentSum === target) {
      return true;
    }
  }

  return false;
}

// using example
const arr = [4,5,8,9,7];
const target = 12;
console.log(hasSubarrayWithSum(arr, target)); // Output: false

const array= [4,5,8,9,7];
const target1 = 13;
console.log(hasSubarrayWithSum(array, target1)); // Output: true




