// 242. Valid Anagram
// Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:
// 1 <= s.length, t.length <= 5 * 10^4
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const hash1 = constructHash(s);
    const hash2 = constructHash(t);
    
    for (let key in hash1) {
        if (hash1[key] !== hash2[key]) return false
    }
    
    return true;
};

const constructHash = function(string) {
    
    const hash = {};
    
    for (let letter of string) {
        if (!hash[letter]) hash[letter] = 0;
        hash[letter]++;
    }
    return hash;
}