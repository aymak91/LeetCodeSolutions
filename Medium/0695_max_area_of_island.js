// 695. Max Area of Island
// Medium

// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

 

// Example 1:


// Input: grid = 
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
// [0,0,0,0,0,0,0,1,1,1,0,0,0],
// [0,1,1,0,1,0,0,0,0,0,0,0,0],
// [0,1,0,0,1,1,0,0,1,0,1,0,0],
// [0,1,0,0,1,1,0,0,1,1,1,0,0],
// [0,0,0,0,0,0,0,0,0,0,1,0,0],
// [0,0,0,0,0,0,0,1,1,1,0,0,0],
// [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

/**
 * @param {number[][]} grid
 * @return {number}
 */

 var maxAreaOfIsland = function(grid) {
    let largestIsland = 0;

    for (let row=0; row<grid.length; row++) {
          for (let col=0; col<grid[0].length; col++) {
              if (grid[row][col] === 1) largestIsland = Math.max(largestIsland, searchIsland(grid, row, col))
            }
        }
        return largestIsland;
};

const searchIsland = (grid, row, col) => {
    if (!inBounds(grid, row, col) || grid[row][col] !== 1) return 0;
    grid[row][col] = 0;

    let size = 1;
    size += searchIsland(grid, row+1, col)
    size += searchIsland(grid, row-1, col)
    size += searchIsland(grid, row, col+1)
    size += searchIsland(grid, row, col-1)

    return size;
}

const inBounds = (grid, row, col) => {
    const rowInbound = row >= 0 && row < grid.length;
    const colInbound = col >= 0 && col < grid[0].length;

    return rowInbound && colInbound;
}