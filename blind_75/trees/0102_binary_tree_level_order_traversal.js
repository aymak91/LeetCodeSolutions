// 102. Binary Tree Level Order Traversal
// Medium

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). 

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000


// BFS
const levelOrderBFS = function(root) {
    if (!root) return [];
    
    const queue = [{node: root, level: 0}];
    const output = [];
    
    while (queue.length > 0) {
        const {node, level} = queue.shift();
        if (!output[level]) output.push([]);
        output[level].push(node.val);
            
        if (node.left !== null) queue.push({node: node.left, level: level+1});
        if (node.right !== null) queue.push({node: node.right, level: level+1});
    }
    
    return output;
};

// DFS iterative
// notice that DFS must push right first if we want to access left first
const levelOrderDFS = function(root) {
    if (!root) return [];
    
    const stack = [{node: root, level: 0}];
    const output = [];
    
    while (stack.length > 0) {
        const {node, level} = stack.pop();
        if (!output[level]) output.push([]);
        output[level].push(node.val);
        
        if (node.right !== null) stack.push({node: node.right, level: level+1});
        if (node.left !== null) stack.push({node: node.left, level: level+1});
    }
    
    return output;
};

// DFS recursive
const levelOrderRecursive = function(root) {
    const levels = [];
      dfsHelper(root, levels, 0);
      return levels;
};

const dfsHelper = (root, levels, levelNum) => {
  if (!root) return;
  
  if (levelNum === levels.length) {
    levels.push([root.val]);
  } else {
    levels[levelNum].push(root.val);
  }
  
  dfsHelper(root.left, levels, levelNum + 1);
  dfsHelper(root.right, levels, levelNum + 1);
}