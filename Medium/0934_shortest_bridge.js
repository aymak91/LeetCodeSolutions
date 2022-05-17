// 934. Shortest Bridge
// Medium

// You are given an n x n binary matrix grid where 1 represents land and 0 represents water.
// An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.
// You may change 0's to 1's to connect the two islands to form one island.
// Return the smallest number of 0's you must flip to connect the two islands.

// Example 1:
// Input: grid = [
//                  [0,1],
//                  [1,0]
//               ]
// Output: 1

// Example 2:
// Input: grid = [
//                  [0,1,0],
//                  [0,0,0],
//                  [0,0,1]
//               ]
// Output: 2

// Example 3:
// Input: grid = [
//                  [1,1,1,1,1],
//                  [1,0,0,0,1],
//                  [1,0,1,0,1],
//                  [1,0,0,0,1],
//                  [1,1,1,1,1]
//              ]
// Output: 1
 

// Constraints:

// n == grid.length == grid[i].length
// 2 <= n <= 100
// grid[i][j] is either 0 or 1.
// There are exactly two islands in grid.

/**
 * @param {number[][]} grid
 * @return {number}
 */
// var shortestBridge = function(grid) {
    
// };


const shortestBridge = (grid) => {

    let mainIsland;
    loop1:
    for (let r = 0; r < grid.length; r += 1) {
        loop2:
        for (let c = 0; c < grid[0].length; c += 1) {
            if (grid[r][c] === 1) {
            mainIsland = traverseIsland(grid, r, c);
            break loop1;
            }
        }
    }
  
    const visited = new Set(mainIsland);
    const queue = [];
    for (let pos of mainIsland) {
        const [ row, col ] = pos.split(',').map(Number);
        queue.push([row, col, 0]);
    }
  
    while (queue.length > 0) {
        const [ row, col, distance ] = queue.shift();
    
        const pos = row + ',' + col;
        if (grid[row][col] === 1 && !mainIsland.has(pos)) return distance - 1;
    
        const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (let delta of deltas) {
            const [ deltaRow, deltaCol ] = delta;
            const neighborRow = row + deltaRow;
            const neighborCol = col + deltaCol;
            const neighborPos = neighborRow + ',' + neighborCol;
            if (isInbounds(grid, neighborRow, neighborCol) && !visited.has(neighborPos)) {
                visited.add(neighborPos);
                queue.push([neighborRow, neighborCol, distance + 1]);
            }
        }
    }
};

const isInbounds = (grid, row, col) => {
    const rowInbounds = 0 <= row  && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    return rowInbounds && colInbounds;
};

const traverseIsland = (grid, row, col, visited = new Set()) => {
    const pos = row + ',' + col;
    if (!isInbounds(grid, row, col) || grid[row][col] === 0 || visited.has(pos)) return visited;  
    visited.add(pos);
  
    traverseIsland(grid, row - 1, col, visited);
    traverseIsland(grid, row + 1, col, visited);
    traverseIsland(grid, row, col - 1, visited);
    traverseIsland(grid, row, col + 1, visited);
  
    return visited;
};