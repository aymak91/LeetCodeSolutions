// 994. Rotting Oranges
// Medium

// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Example 2:
// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Example 3:
// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

var orangesRotting = function(grid) {
    

    let queue = new DoublyLinkedList();
    let freshOranges = 0;
    let maxTime = 0;
    
    for (let row=0; row<grid.length; row++) {
        for (let col=0; col<grid[0].length; col++) {
            if (grid[row][col] === 1) freshOranges++;
            if (grid[row][col] === 2) queue.add(new Node([row, col, 0]))
        }
    }
    
    while (queue.length > 0) {
        const [row, col, level] = queue.pop();
        if (level > maxTime) maxTime = level;
        
        const directions = [[row+1, col],[row-1, col],[row, col+1],[row, col-1]];
        for (let dir of directions) {

            if (validCoordinate(grid, dir[0], dir[1]) && grid[dir[0]][dir[1]] === 1) {
                queue.add(new Node([dir[0], dir[1], level+1]));
                grid[dir[0]][dir[1]] = 2;
                freshOranges--;            
            }

        }
    }
    
    return freshOranges === 0 ? maxTime : -1;
};



const validCoordinate = function(board, row, col) {
    const validRow = row >= 0 && row < board.length;
    const validCol = col >= 0 && col <board[0].length;
    return validRow && validCol;
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null);
        this.tail = new Node(null);
        
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.length = 0;
    }
    
    add(node) {
        let prev = this.head;
        let nxt = this.head.next;
        
        prev.next = node;
        nxt.prev = node;
        
        node.prev = prev;
        node.next = nxt;
        
        this.length++;
    }
    
    pop() {
        if (this.length === 0) return;
        
        const node = this.tail.prev;
        let prev = node.prev;
        let nxt = this.tail;
        // console.log(node, prev)
        prev.next = nxt;
        nxt.prev = prev;
        this.length--;
        
        return node.val;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// array solution

var orangesRotting = function(grid) {
    

    let queue = [];
    let freshOranges = 0;
    let maxTime = 0;
    
    for (let row=0; row<grid.length; row++) {
        for (let col=0; col<grid[0].length; col++) {
            if (grid[row][col] === 1) freshOranges++;
            if (grid[row][col] === 2) queue.push([row, col, 0])
        }
    }
    
    while (queue.length > 0) {
        const [row, col, level] = queue.shift();
        if (level > maxTime) maxTime = level;
        
        const directions = [[row+1, col],[row-1, col],[row, col+1],[row, col-1]];
        for (let dir of directions) {

            if (validCoordinate(grid, dir[0], dir[1]) && grid[dir[0]][dir[1]] === 1) {
                queue.push([dir[0], dir[1], level+1]);
                grid[dir[0]][dir[1]] = 2;
                freshOranges--;            
            }

        }
    }
    
    return freshOranges === 0 ? maxTime : -1;
};
