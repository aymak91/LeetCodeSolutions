// 1091. Shortest Path in Binary Matrix
// Medium

// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path. 

// Example 1:
// Input: grid = [[0,1],[1,0]]
// Output: 2

// Example 2:
// Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
// Output: 4

// Example 3:
// Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
// Output: -1
 
// Constraints:
// n == grid.length
// n == grid[i].length
// 1 <= n <= 100
// grid[i][j] is 0 or 1

var shortestPathBinaryMatrix = function(grid) {
    const m = grid.length || 0
    const n = m && grid[0].length || 0
    
    if (m === 0 || n === 0 || grid[0][0] !== 0) return -1
  
    let step = 1
    const queue = [[0, 0]]
    const dires = [[-1, 0], [1, 0], [0, 1], [0, -1], [-1, 1], [-1, -1], [1, 1], [1, -1]]
    
    while (queue.length) {
      const size = queue.length
      for (let i = 0; i < size; i++) {
        const [x, y] = queue.shift()
        
        if (x === m - 1 && y === n - 1) return step
        
        for (const [dx, dy] of dires) {
          const newX = x + dx, newY = y + dy
          if (_withinBound(newX, newY, m, n) && grid[newX][newY] === 0) {
            grid[newX][newY] = 1
            queue.push([newX, newY])
          }
        }
      }
      
      step += 1
    }
    
    return -1
  };
    
  function _withinBound(x, y, m, n) {
    return 0 <= x && 0 <= y && x < m && y < n
  }