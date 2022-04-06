// 62. Unique Paths
// Medium

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
// How many possible unique paths are there?

 

// Example 1:
// Input: m = 3, n = 7
// Output: 28

// Example 2:
// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Example 3:
// Input: m = 7, n = 3
// Output: 28

// Example 4:
// Input: m = 3, n = 3
// Output: 6
 
// Constraints:
// 1 <= m, n <= 100
// It's guaranteed that the answer will be less than or equal to 2 * 10^9.

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
    let dp = [...Array(m)].map(e => Array(n).fill(1));
    
    // // fill first col
    // for (let i=0; i<dp.length; i++) dp[i][0] = 1;

    // // fill first row
    // for (let i=0; i<dp[0].length; i++) dp[0][i] = 1;
    
    for (let i=1; i<dp.length; i++) {
        for (let j=1; j<dp[0].length; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
};

const uniquePaths2 = function(m, n, memo = {}) {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 || n === 1) return 1
    if (m === 0 || n === 0) return 0;
    
    memo[key] = uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo);
    return memo[key];
};

const uniquePathsSlow = function(m, n) {
    if (m === 1 || n === 1) return 1
    if (m === 0 || n === 0) return 0;
    
    return uniquePaths(m-1, n) + uniquePaths(m, n-1);
};

