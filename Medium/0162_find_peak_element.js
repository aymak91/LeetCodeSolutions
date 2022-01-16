// 162. Find Peak Element
// Medium

// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 

// Constraints:

// 1 <= nums.length <= 1000
// -231 <= nums[i] <= 231 - 1
// nums[i] != nums[i + 1] for all valid i.

/**
 * @param {number[]} nums
 * @return {number}
 */
 const findPeakElementIterative = function(nums) {
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        
        if (nums[mid] < nums[mid+1]) left = mid+1;
        if (nums[mid] >= nums[mid+1]) right = mid;
    }
    return left;
};

const findPeakElementRecursive = function(nums) {
    return search(nums, 0, nums.length-1);
};

const search = function(nums, left, right) {
    if (left === right) return left;
    let mid = Math.floor(left+(right-left)/2);
    if (nums[mid] > nums[mid+1]) return search(nums, left, mid);
    return search (nums, mid+1, right);
}