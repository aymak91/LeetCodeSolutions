// 70. Climbing Stairs
// Easy

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:
// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    if (n === 0 || n === 1) return 1;
    let nums = [1, 1];
    
    for (let i=2; i<=n; i++) {
        let next = nums[0] + nums[1];
        
        nums = [nums[1], next];
    }
    
    return nums[1]
    
};

// Space: O(1) because nums does not scale
// Time: O(n) where n = number of stairs

// | n | climbStairs(n) |
// |:-:|:--------------:|
// | 0 |        1       |
// | 1 |        1       |
// | 2 |        2       |
// | 3 |        3       |
// | 4 |        5       |