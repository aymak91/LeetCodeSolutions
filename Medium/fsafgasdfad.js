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

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function(board, word) {
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word.charAt(0) && dfs(board, i, j, 0, word)) {
                return true;
            }
        }
    }
    return false;
};

let dfs = function(board, i, j, count, word) {
    if (count === word.length) return true;
    
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] != word.charAt(count)) {
        return false
    }
    
    let temp = board[i][j];
    board[i][j] = ' ';
    found = dfs(board, i+1, j, count + 1, word)
        || dfs(board, i - 1, j, count + 1, word)
        || dfs(board, i, j + 1, count + 1, word)
        || dfs(board, i, j - 1, count + 1, word)

    board[i][j] = temp;
    return found;
}

