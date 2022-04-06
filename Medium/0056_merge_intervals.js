// 56. Merge Intervals
// Medium

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the 
// non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:

// 1 <= intervals.length <= 10^4
// intervals[i].length == 2
// 0 <= starti <= endi <= 10^4

const mergeBetter = function(intervals) {
    if (intervals.length <= 1) return intervals;
    
    intervals.sort((a,b) => a[0] -b[0]);
    let outputArr = [intervals[0]];
    
    
    for (let i=1; i<intervals.length; i++) {
        const currIntvl = {
            start: intervals[i][0],
            end: intervals[i][1],
        }
        
        const lastIntvlIdx = outputArr.length-1;
        const lastIntvl = {
            start: outputArr[lastIntvlIdx][0],
            end: outputArr[lastIntvlIdx][1]
        }
        

        if (currIntvl.start <= lastIntvl.end && currIntvl.end > lastIntvl.end) outputArr[lastIntvlIdx][1] = currIntvl.end;
        if (currIntvl.start <= lastIntvl.end && currIntvl.end <= lastIntvl.end) continue;
        if (currIntvl.start > lastIntvl.end) outputArr.push(intervals[i]);
    }
    return outputArr;
};

const merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    
    intervals.sort((a,b) => a[0] -b[0]);
    let outputArr = [intervals[0]];
    
    
    for (let i=1; i<intervals.length; i++) {
        const lastIntvlIdx = outputArr.length-1;
        const lastRightBound = outputArr[lastIntvlIdx][1];
        const leftBound = intervals[i][0]; 
        const rightBound = intervals[i][1]; 

        if (leftBound <= lastRightBound && rightBound > lastRightBound) outputArr[lastIntvlIdx][1] = rightBound;
        if (leftBound <= lastRightBound && rightBound <= lastRightBound) continue;
        if (leftBound > lastRightBound) outputArr.push(intervals[i]);
    }
    return outputArr;
};