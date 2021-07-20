class TicTacToe {
    constructor() {
        this.currentPlayer = "x";
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ];
        this.result = null;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (
            this.result === null &&
            this.matrix[rowIndex][columnIndex] === null
        ) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayer;
            this.win.forEach((combo) => {
                if (
                    combo.every(
                        (ind) => this.matrix.flat()[ind] === this.currentPlayer
                    )
                ) {
                    this.result = this.currentPlayer;
                    this.winner = this.currentPlayer;
                }
            });
            if (this.noMoreTurns() && this.result == null) {
                this.result = "draw";
            }
            this.currentPlayer === "x"
                ? (this.currentPlayer = "o")
                : (this.currentPlayer = "x");

            return true;
        } else {
            return false;
        }
    }

    isFinished() {
        return this.result !== null;
    }

    getWinner() {
        if (this.result === "draw") {
            return null;
        } else {
            return this.result;
        }
    }

    noMoreTurns() {
        return !this.matrix.flat().includes(null);
    }

    isDraw() {
        return this.result === "draw";
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex] || null;
    }
}

module.exports = TicTacToe;
