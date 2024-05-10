//10. Даны две точки построить путь с помощью аллгоритма распространения волны
function printArray(a) {
    let str = '';
    a.forEach(row => {
      row.forEach(cell => { str += cell } );
      str += '\n';
    });
    console.log(str);
  }



const points = [[1,1],[5,6]];
const board = [];

const x1 = points[0][0];
const x2 = points[1][0];
const y1 = points[0][1];
const y2 = points[1][1];

let colonsCount = Math.abs(x1-x2);
let rowsCount = Math.abs(y1-y2);
    
for (let i = 0; i < rowsCount; i++){
    let row = [];
    for (let j = 0; j < colonsCount; j++){
        row.push(null);
    }
    board.push(row);
}

board[rowsCount-1][0] = 0;
board[0][colonsCount-1] = 'f';
//Вверх. вниз, влево, вправо. Добавить 4 направления диагональных
const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

let d = 0;
let finishUnchecked = true;
let canContinue = true;
while (finishUnchecked && canContinue){
    canContinue = false;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === d) {
                for (const [dx, dy] of directions) {
                    const ni = i + dy;
                    const nj = j + dx;
                    if (ni >= 0 && ni < board.length && nj >= 0 && nj < board[i].length){
                        if (board[ni][nj] === null){
                            board[ni][nj] = d + 1;
                            canContinue = true;
                        }   
                        if (board[ni][nj] === 'f'){
                            board[ni][nj] = d + 1;
                            finishUnchecked = false;
                        }
                    }
                }
            }
        }
    }
    d++;
    printArray(board);
}

let path = [];
let x = colonsCount-1;
let y = 0;

if (finishUnchecked === false){
    for (const [dx, dy] of directions){
        const ni = y + dy;
        const nj = x + dx;
        if (ni >= 0 && ni < board.length && nj >= 0 && nj < board[y].length){
            let checked = board[ni][nj];
            let current = board[y][x];
            if (current - checked === 1){
                y = ni;
                x = nj;
                path.push([y,x]);
                printArray(path);
            }
        }
    }

}

