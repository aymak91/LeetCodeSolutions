// a: numerator
// b: denominator 

var findPeakElement = function(nums) {
    // bases
    if (nums.length === 1) return 0;
    if (nums.length === 2) {
        if (nums[0] > nums[1]) return 0;
        else return 1;
    }
    
    // binary
    const mid = Math.floor(nums.length / 2);
    
    if (nums[mid - 1] && nums[mid + 1] && nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
        return mid;
    } else if (nums[mid - 1] && nums[mid] < nums[mid - 1]) {
        return findPeakElement(nums.slice(0, mid));
    } else {
        return 1 + mid + findPeakElement(nums.slice(mid + 1));
    }
};

function estimatePi(n) {
    let count = 0
    for (let i=0; i<n; i++) {
        const x = Math.random();
        const y = Math.random();
        if (Math.sqrt((x*x + y*y) <=1)) count++;
    }
    return (4*count/n).toFixed(10)
}