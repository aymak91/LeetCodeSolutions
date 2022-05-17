// 104. Maximum Depth of Binary Tree
// Easy

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 10^4].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 const maxDepth = (root) => {
    if (!root) return 0;
    
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    
    return Math.max(left, right) + 1
}

const maxDepthIterative = (root) => {
    if (!root) return 0;
    
    const stack = [{node: root, depth: 1}];
    let max = 0;
    
    while (stack.length > 0) {
        const {node, depth} = stack.pop();
        max = Math.max(max, depth);    
        
        if (node.left) stack.push({node: node.left, depth: depth+1});
        if (node.right) stack.push({node: node.right, depth: depth+1});
    }
    
    return max;
}