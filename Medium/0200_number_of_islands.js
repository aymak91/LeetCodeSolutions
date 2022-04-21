// 200. Number of Islands
// Medium

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume 
// all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 
// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    if (grid === null || grid.length === 0) return 0;
    
    let islands = 0;
    
    for (let row=0; row<grid.length; row++) {
        for (let col=0; col<grid[0].length; col++) {
            if (grid[row][col] === '1') {
                islands += dfsFillCount(grid, row, col);
            } 
        }
    }
    
    return islands;
    
};

const dfsFillCount = function(board, row, col) {
    
    const inBounds = row >= 0  && row < board.length && col >= 0 && col <board[row].length;
    if (!inBounds || board[row][col] !== '1') return 0;
    
    board[row][col] = '0';
    
    dfsFillCount(board, row+1, col);
    dfsFillCount(board, row-1, col);
    dfsFillCount(board, row, col+1);
    dfsFillCount(board, row, col-1);
    
    return 1;
}

// .....................................................


const numIslandsMem = (grid) => {
	let count = 0;
	const visited = new Set();
	
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
	if (dfs(grid, row, col, visited)) count++;
}
}

	return count;
}

const dfs = (grid, row, col, visited) => {
	if (!posInbounds(grid, row, col)) return false;
	const pos = row + "," + col;
	if (visited.has(pos)) return false;
	if (grid[row][col] === "0") return false;
	
	visited.add(pos);

const exploreUp = dfs(grid, row - 1, col, visited);
const exploreDown = dfs(grid, row + 1, col, visited);
const exploreLeft = dfs(grid, row, col - 1, visited);
const exploreRight =	dfs(grid, row, col + 1, visited);

	return true;
}

const posInbounds = (grid, row, col) => {
	const rowInbounds = 0 <= row && row < grid.length;
	const colInbounds = 0 <= col && col < grid[0].length;
	return rowInbounds && colInbounds;
}

