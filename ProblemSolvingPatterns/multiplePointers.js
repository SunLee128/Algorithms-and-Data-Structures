/* Multiple Pointers
Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
Very efficient for solving problems with minimal space complexity as well/
*/

/*
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
*/

//Naive Solution, Time Complexity - O(N^2), Space Complexity - O(1)
function sumZero (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [
          arr[i],
          arr[j]
        ];
      }
    }
  }
}

//Refactored, Time Complexity - O(N), Space Complexity - O(1)
function sumZero (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [
        arr[left],
        arr[right]
      ];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// sumZero([
//   -4,
//   -3,
//   -2,
//   -1,
//   0,
//   1,
//   2,
//   5
// ]);

//returns the first combination of two numbers that makes target
var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum == target) {
      return [
        nums[left],
        nums[right]
      ];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(
  twoSum(
    [
      2,
      7,
      11,
      15
    ],
    9
  )
); // [2,7]

//returns number of unique values
function countUniqueValues (arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(
  countUniqueValues([
    1,
    2,
    2,
    5,
    7,
    7,
    99
  ])
); //5

