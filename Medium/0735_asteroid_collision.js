// 735. Asteroid Collision
// Medium
// We are given an array asteroids of integers representing asteroids in a row.
// For each asteroid, the absolute value represents its size, and the sign represents its direction 
// (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one 
// will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Example 1:
// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.

// Example 2:
// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.

// Example 3:
// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

// Example 4:
// Input: asteroids = [-2,-1,1,2] 
// Output: [-2,-1,1,2]
// Explanation: The -2 and -1 are moving left, while the 1 and 2 are moving right. Asteroids moving the same 
// direction never meet, so no asteroids will meet each other.
 
// Constraints:
// 1 <= asteroids <= 104
// -1000 <= asteroids[i] <= 1000
// asteroids[i] != 0

const asteroidCollision = function(asteroids) {
    
    // the only time asteroids explode is if the left asteroid is moving right as the right asteroid moves left
    // i.e. left is postive, right is negative
    
    let stack = [];
    
    for (let i = 0; i < asteroids.length; i++) {

        // if stack is empty or if the asteroid is positive
        if (stack.length < 1 || asteroids[i] > 0) { 
            // then just push the asteroid into the stack
            stack.push(asteroids[i]); 
        } else {
            while(true) {
                // look at the top
                const peek = stack[stack.length - 1]; 
                // if previous asteroid was negative, there will be no collision
                if (peek < 0){ 
                    stack.push(asteroids[i]);
                    break;
                    // if prev was pos and both are equal in magnitude, pop last asteroid and do not push
                } else if (peek === -asteroids[i]) { 
                    stack.pop();
                    break;
                    // if prev was pos and is greater than asteroid, do nothing. current asteroid explodes
                } else if (peek > -asteroids[i]) { 
                    break;
                    // else if prev was pos and is less than current asteroid, keep destroying prev asteroid
                } else { 
                    stack.pop();
                    // if everything in stack got blown up
                    if (stack.length < 1) { 
                        stack.push(asteroids[i]);
                        break;
                    }
                }
            }
        }
        
    }
    
    return stack;
};