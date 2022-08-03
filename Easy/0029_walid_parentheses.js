// 20. Valid Parentheses
// Easy

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 
// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Constraints:
// 1 <= s.length <= 10^4
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function(s) {
    
    const closeToOpen = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    
    const stack = [];
    
    for (let char of s) {
        if (char in closeToOpen) {
            const top = stack[stack.length-1];
            if (stack.length > 0 && top === closeToOpen[char]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};