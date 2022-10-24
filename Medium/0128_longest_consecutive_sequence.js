// 128. Longest Consecutive Sequence
// Medium
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:
// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

/**
 * @param {number[]} nums
 * @return {number}
 */
 const longestConsecutive = function(nums) {
    const numsSet = new Set(nums);
    let longestSequence = 0;

    for (let i=0; i<nums.length; i++) {
        const num = nums[i];
        const prev = num - 1;
        let next = num + 1;
        let sequence = 1;

        if (!numsSet.has(prev)) {
            while (numsSet.has(next)) {
                sequence++;
                next++;
            }
            longestSequence = Math.max(longestSequence, sequence);
        }
    }

    return longestSequence;
};