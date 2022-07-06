// 45. Jump Game II
// Medium

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

 

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, 
// then 3 steps to the last index.

// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2
 
// Constraints:
// 1 <= nums.length <= 10^4
// 0 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    let result = 0;
    
    let [left, right] = [0, 0];
    
    while (right < nums.length-1) {
        let farthest = 0;
        for (let i=left; i<right+1; i++) {
            farthest = Math.max(farthest, i+nums[i]);
        }
        left = right+1;
        right = farthest;
        result++;
    }
    return result;
};