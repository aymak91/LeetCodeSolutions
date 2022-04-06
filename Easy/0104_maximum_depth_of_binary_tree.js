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


// Recursive DFS

 var maxDepth = function(root) {
    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// Iterative BFS

// class Solution:
//     def maxDepth(self, root: Optional[TreeNode]) -> int:
//         if not root:
//             return 0
        
//         level = 0
//         q = deque([root])
        
//         while q:
//             for i in range(len(q)):
//                 node = q.popleft()
//                 if node.left:
//                     q.append(node.left)
//                 if node.right:
//                     q.append(node.right)
//             level + 1
//         return level

var maxDepth = function(root) {
    if (root === null) return 0;
    
    let level = 0;
    let queue = [root]

    let levelLength = queue.length;

    while (queue.length) {
        level++;
        while(levelLength>0){
            let removedNode = queue.shift();
            if(removedNode.left) queue.push(removedNode.left);
            if(removedNode.right) queue.push(removedNode.right);
            levelLength--
        }
        levelLength = queue.length;
    }
    return level;
};

// Iterative Ordered DFS

var maxDepth = function(root) {
    if (root === null) return 0;
    
    let stack = [[root, 1]];
    let res = 0;

    while (stack.length) {
        let [node, depth] = stack.pop();
        if (node) {
            res = Math.max(res, depth);
            stack.push([node.left, depth+1]);
            stack.push([node.right, depth+1]);
        }
    }
    return res;
};