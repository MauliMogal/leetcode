// Brute Force [O(n²)]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] === nums[j]) {
              return true;
          }
      }
  }
  return false;
};

// JavaScript's Built-in Set Trick [O(n)]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  return new Set(nums).size !== nums.length;
};


