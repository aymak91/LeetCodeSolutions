// 79. Word Search
// Medium

// Given an m x n board and a word, find if the word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === word.charAt(0) && dfs(board, row, col, 0, word)) {
                return true;
            }
        }
    }
    return false;
};

const dfs = function(board, row, col, count, word) {
    if (count === word.length) return true;
    
    const inBound = row < 0 || row >= board.length || col < 0 || col >= board[row].length; 

    if (inBound || board[row][col] != word.charAt(count)) return false;
    
    let temp = board[row][col];
    board[row][col] = ' ';
    found = dfs(board, row+1, col, count + 1, word)
        || dfs(board, row - 1, col, count + 1, word)
        || dfs(board, row, col + 1, count + 1, word)
        || dfs(board, row, col - 1, count + 1, word)

    board[row][col] = temp;
    return found;
}