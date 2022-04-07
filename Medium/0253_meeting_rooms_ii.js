// Lintcode 919 · Meeting Rooms II

// Description
// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
// find the minimum number of conference rooms required.)

// Example

// Example1
// Input: intervals = [(0,30),(5,10),(15,20)]
// Output: 2
// Explanation:
// We need two meeting rooms
// room1: (0,30)
// room2: (5,10),(15,20)

// Example2
// Input: intervals = [(2,7)]
// Output: 1
// Explanation: 
// Only need one meeting room

const minMeetingRooms = function(intervals) {
    // Write your code here

    const start = intervals.map(interval => interval.start).sort((a, b) => a - b);
    const end = intervals.map(interval => interval.end).sort((a,b) => a - b);
    let res = 0;
    let count = 0; 
    let [s, e] = [0,0];

    while (s < intervals.length) {
      if (start[s] < end[e]) {
        s++;
        count++;
      } else {
        e++;
        count--;
      }
      res = Math.max(res, count);
    }
    return res;
}