// 42. Trapping Rain Water
// Hard

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 
// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:
// n == height.length
// 0 <= n <= 3 * 104
// 0 <= height[i] <= 105

/**
 * @param {number[]} height
 * @return {number}
 */

// O(n) memory
const trap = function(height) {
     
    if (height === null) return 0;
    
    let totalWater = 0;
    let length = height.length;
    let leftMax = new Array(length);
    let rightMax = new Array(length);
    
    leftMax[0] = height[0];
    rightMax[length-1] = height[length-1];
    
    for (let i=1; i<length; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i-1]);
    }
    
    for (let i=length-2; i>=0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i+1])
    }
    
    for (let i=1; i<length-1; i++) {
        totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    
    return totalWater;
};

// O(1) memory
const trapMemory = function(height) {
    if (height.length === 0) return 0;
    
    let left = 0;
    let right = height.length - 1;
    
    let leftMax = height[left];
    let rightMax = height[right];
    
    let res = 0;
    
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            res += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            res += rightMax - height[right];
        }
    }
    
    return res;
};