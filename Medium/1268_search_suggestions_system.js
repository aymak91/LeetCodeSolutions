// 1268. Search Suggestions System
// Medium

// You are given an array of strings products and a string searchWord.

// Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

// Return a list of lists of the suggested products after each character of searchWord is typed.

// Example 1:
// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"].

// Example 2:
// Input: products = ["havana"], searchWord = "havana"
// Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
// Explanation: The only word "havana" will be always suggested while typing the search word.
 

// Constraints:
// 1 <= products.length <= 1000
// 1 <= products[i].length <= 3000
// 1 <= sum(products[i].length) <= 2 * 10^4
// All the strings of products are unique.
// products[i] consists of lowercase English letters.
// 1 <= searchWord.length <= 1000
// searchWord consists of lowercase English letters.

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
 var suggestedProducts = function(products, searchWord) {
    products.sort();

    let left = 0;
    let right = products.length-1;
    let output = [];

    for (let i=0; i<searchWord.length; i++) {
        const char = searchWord[i];
        const words = [];
        
        while (left < products.length && products[left][i] !== char) {
            left++;
        }

        while (right >= 0 && products[right][i] !== char) {
            right--;
        }

        for (let j=left; j<left+3; j++) {
            if (j > right) break;
            words.push(products[j]);
        }
        output.push(words);
    }

    return output;
};

// O(nlogn + n*w + 3m) where
// n = products.length
// w = longest product word length
// m = searchWord.length