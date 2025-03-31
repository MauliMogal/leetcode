/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for (let i = 0; i < nums.length; i++) {
     let index = Math.abs(nums[i]) - 1;
     if (nums[index] > 0) {
         nums[index] = -nums[index]; // Mark visited numbers as negative
     }
 }

 let result = [];
 for (let i = 0; i < nums.length; i++) {
     if (nums[i] > 0) {
         result.push(i + 1); // Unvisited indices + 1 are the missing numbers
     }
 }

 return result;
};