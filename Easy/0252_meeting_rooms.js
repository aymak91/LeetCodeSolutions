// 920 · Meeting Rooms
// Easy

// Description
// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
// determine if a person could attend all meetings.


// Example

// Example1
// Input: intervals = [(0,30),(5,10),(15,20)]
// Output: false
// Explanation: 
// (0,30), (5,10) and (0,30),(15,20) will conflict

// Example2
// Input: intervals = [(5,8),(9,15)]
// Output: true
// Explanation: 
// Two times will not conflict 

const canAttendMeetings = function (intervals) {
    // Write your code here

    intervals.sort((a,b) => a.start - b.start)

    for (let i=1; i<intervals.length; i++) {
      const lastEnd = intervals[i-1].end;
      const currStart = intervals[i].start;
        if (currStart < lastEnd) return false;
    }

    return true;
};