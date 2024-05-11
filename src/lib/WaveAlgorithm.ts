import { Cords } from "./Cords";

export class WaveAlgorithm{
    board!: Array<Array<any>>; 
    path!: Array<Array<number>>;
    startingPoint!: Cords;
    endPoint!: Cords;
    
    createBoard(colonsCount:number, rowsCount:number){
        this.board = [];
        for (let i = 0; i < rowsCount; i++){
            let row = [];
            for (let j = 0; j < colonsCount; j++){
                row.push(null);
            }
            this.board.push(row);
        }
        
    }
    calculate(){
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const board = this.board;
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
        }

        let x = this.endPoint.x;
        let y = this.endPoint.y;
        this.path = [[y,x]];

        // board[rowsCount-1][0] = 0;
        // board[0][colonsCount-1] = 'f';
        // Пока столбец != 0 И строка != rowsCount-1 Тогда

        if (finishUnchecked === false){
            while (x != this.startingPoint.x || y != this.startingPoint.y){
                for (const [dx, dy] of directions){
                    const ni = y + dy;
                    const nj = x + dx;
                    if (ni >= 0 && ni < board.length && nj >= 0 && nj < board[y].length){
                        let checked = board[ni][nj];
                        let current = board[y][x];
                        if (current - checked === 1){
                            y = ni;
                            x = nj;
                            this.path.push([y,x]);
                            break;
                        }
                    }
                }   
            }
        }

    }
}