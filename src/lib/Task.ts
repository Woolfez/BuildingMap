export class MatrixOperations {
    matrix1: number[][];
    matrix2: number[][];

    constructor(matrix1: number[][], matrix2: number[][]) {
        this.matrix1 = matrix1;
        this.matrix2 = matrix2;
    }

    private areCompatible(): boolean {
        return this.matrix1.length === this.matrix2.length &&
               this.matrix1[0].length === this.matrix2[0].length;
    }

    private isMatrixValid(matrix: number[][]): boolean {
        if (matrix.length === 0) return false;
        const cols = matrix[0].length;
        for (let row of matrix) {
            if (row.length !== cols) return false;
        }
        return true;
    }

    add(): number[][] | null {
        if (this.isMatrixValid(this.matrix1) && this.isMatrixValid(this.matrix2)) {
            if (this.areCompatible()) {
                const rows = this.matrix1.length;
                const cols = this.matrix1[0].length;
                const result: number[][] = [];
                for (let i = 0; i < rows; i++) {
                    result.push([]);
                    for (let j = 0; j < cols; j++) {
                        result[i][j] = this.matrix1[i][j] + this.matrix2[i][j];
                    }
                }
                return result;
            } else {
                console.error("Matrices are not compatible for addition.");
                return null;
            }
        } else {
            console.error("Invalid matrices provided.");
            return null;
        }
    }

    subtract(): number[][] | null {
        if (this.isMatrixValid(this.matrix1) && this.isMatrixValid(this.matrix2)) {
            if (this.areCompatible()) {
                const rows = this.matrix1.length;
                const cols = this.matrix1[0].length;
                const result: number[][] = [];
                for (let i = 0; i < rows; i++) {
                    result.push([]);
                    for (let j = 0; j < cols; j++) {
                        result[i][j] = this.matrix1[i][j] - this.matrix2[i][j];
                    }
                }
                return result;
            } else {
                console.error("Matrices are not compatible for subtraction.");
                return null;
            }
        } else {
            console.error("Invalid matrices provided.");
            return null;
        }
    }

    multiply(): number[][] | null {
        if (this.isMatrixValid(this.matrix1) && this.isMatrixValid(this.matrix2)) {
            if (this.areCompatible()) {
                const rows = this.matrix1.length;
                const cols = this.matrix1[0].length;
                const result: number[][] = [];
                for (let i = 0; i < rows; i++) {
                    result.push([]);
                    for (let j = 0; j < cols; j++) {
                        result[i][j] = this.matrix1[i][j] * this.matrix2[i][j];
                    }
                }
                return result;
            } else {
                console.error("Matrices are not compatible for subtraction.");
                return null;
            }
        } else {
            console.error("Invalid matrices provided.");
            return null;
        }
    }
}
    
const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[5, 6], [7, 8]];

const matrixOps = new MatrixOperations(matrix1, matrix2);

console.log("Matrix addition:");
console.log(matrixOps.add());

console.log("Matrix subtraction:");
console.log(matrixOps.subtract());

console.log("Matrix multiplication:");
console.log(matrixOps.multiply());