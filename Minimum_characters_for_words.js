// Minimum Characters for Words
 
// Write a function that takes in an array of words and returns 
// the smallest array of characters needed to form all the words. The
// characters don’t need to be in any particular order.
 
// For example, the characters [“y”, “r”, “o”, “u”] are need to form the
// words [“your”, “you”, “or”, “yo”].
 
// Note: Input words won’t contain any spaces; however, they might contain
// punctuation and/ or special characters.
 
// Sample Input:
// words = [“this”, “that”, “did”, “deed”, “them!”, “a”]
 
// Sample Output:
// [“t”, “t”, “h”, “i”, “s”, “a”, “d”, “d”, “e”, “e”, “m”, “!”]
// These characters could be ordered differently.

const minChars = function(words) {
    let minCharCount = {};
    let output = [];

    for (let i=0; i<words.length; i++) {
        const word = words[i]
        let wordChars = {}
        for (let j=0; j<word.length; j++) {
            const char = word[j];
            
            if (wordChars[char] === undefined) wordChars[char] = 0;
            wordChars[char]++;

            if (minCharCount[char] === undefined) minCharCount[char] = 0;
            if (minCharCount[char] < wordChars[char]) minCharCount[char] = wordChars[char];
        }
    }

    const keys = Object.keys(minCharCount);
    const values = Object.values(minCharCount);

    for (let i=0; i< keys.length; i++) {
        for (let j=0; j<values[i]; j++) {
            output.push(keys[i]);
        }
    }

    return output;
}
