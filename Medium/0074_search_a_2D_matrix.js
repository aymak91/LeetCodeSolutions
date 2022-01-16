// Search a 2D Matrix
// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 const searchMatrix = function(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    let topPointer = 0;
    let bottomPointer = rows - 1;
    
    while (topPointer <= bottomPointer) {
        let row = Math.floor((topPointer + bottomPointer) / 2);
        if (target > matrix[row][cols-1]) {
            topPointer = row + 1
        } else if (target < matrix[row][0]) {
            bottomPointer = row - 1
        } else {
            break;
        }
    }
    
    if (!(topPointer <= bottomPointer)) return false;
    
    let row = Math.floor((topPointer + bottomPointer) / 2);
    let left = 0;
    let right = cols - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (target >= matrix[row][mid]) left = mid+1;
        if (target < matrix[row][mid]) right = mid - 1;
        if (target === matrix[row][mid]) return true;

        
    }
    return false;
};