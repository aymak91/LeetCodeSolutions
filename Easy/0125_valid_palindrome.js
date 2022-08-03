// 125. Valid Palindrome
// Easy

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all 
// non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
/**
 * @param {string} s
 * @return {boolean}
 */

// stack
const isPalindromeStack = function(s) {
    const formatted = s
				.toUpperCase()
        .split('')
        .filter(char => /[A-Za-z0-9]/g.test(char))
        
    const stack = [];
    for (let i = 0; i < formatted.length; i++) {
        const mid = Math.floor(formatted.length/2);
        const char = formatted[i];
        const top = stack[stack.length-1];
        if (formatted.length%2 === 1 && i === mid) continue;
        if (i < mid) stack.push(char);
        if (i >= mid && top === char) stack.pop(char);
    }
    
    return stack.length === 0;
};

// two pointers
const isPalindrome = function(s) {
    const formatted = s
				.toUpperCase()
        .split('')
        .filter(char => /[A-Za-z0-9]/g.test(char))
        
    const stack = [];
    for (let i = 0; i < formatted.length; i++) {
        const mid = Math.floor(formatted.length/2);
        const char = formatted[i];
        const top = stack[stack.length-1];
        if (formatted.length%2 === 1 && i === mid) continue;
        if (i < mid) stack.push(char);
        if (i >= mid && top === char) stack.pop(char);
    }
    
    return stack.length === 0;
};