const lastRow = maze.length - 1;
const lastCol = maze[0].length - 1;

const DIRECTIONS = [[0,1],[0,-1],[1,0],[-1,0]];

const queue = [];
const addToQueue = (row,col,step) => {
    maze[row][col] = -1;
    queue.push([row,col,step]);
}

//add start location to queue
addToQueue(0,0,0);

const isBetween = (num, lower, upper) => lower <= num && num <= upper;
const validUnvisitedCell = (row,col) => {
    return isBetween(row, 0, lastRow) && isBetween(col, 0, lastCol) && maze[row][col] === 0;
}


while(queue.length){
    const [row,col,step] = queue.shift();
    if(row === lastRow && col === lastCol) return step;
    const newStep = step + 1;
    let dirSkipFlag = 0;
    for(let jumpSize=1; jumpSize<=k; jumpSize++){
        for(let i =0; i<4; i++){
            const dirFlag = 1<<i;
            if(dirSkipFlag & dirFlag) continue;
            const [dr,dc] = DIRECTIONS[i];
            let nRow = row + dr*jumpSize;
            let nCol = col + dc*jumpSize;
            if(validUnvisitedCell(nRow,nCol)){
                addToQueue(nRow,nCol,newStep);
            } else {
                dirSkipFlag |= dirFlag;
            }
        }
    }
}
return -1;

// 0 0000000000000000
// 1 0000000000000001
// 2 0000000000000010
// 3 0000000000000011

