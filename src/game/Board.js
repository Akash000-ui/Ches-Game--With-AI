import { Bishop } from "./Piece/Bishop";
import { King } from "./Piece/King";
import { Knight } from "./Piece/Knight";
import { Pawn } from "./Piece/Pawn";
import { Queen } from "./Piece/Queen";
import { Rook } from "./Piece/Rook";

class Board {
    coins = [
        Rook,
        Knight,
        Bishop,
        Queen,
        King,
        Bishop,
        Knight,
        Rook
    ]

    board = [];

    getSquares() {
        return this.board;
    }

    constructor() {
        this.board = Array.from({ length: 8 }, () => Array(8).fill(null));
        this.initilizeBoard();
    }

    initilizeBoard() {
        for (let c = 0; c < 8; c++) {
            this.board[0][c] = new this.coins[c](false, 0, c);
            this.board[7][c] = new this.coins[c](true, 7, c);

            this.board[1][c] = new Pawn(false, 1, c);
            this.board[6][c] = new Pawn(true, 6, c);
        }
    }

    getPiece(row, col) {
        if (row < 0 || row > 7 || col < 0 || col > 7)
            return null;

        return this.board[row][col];
    }


    makeMove(fr, fc, tr, tc) {
        const piece = this.board[fr][fc];

        this.board[tr][tc] = piece;
        this.board[fr][fc] = null;

        piece.row = tr;
        piece.col = tc;
        piece.hasMoved = true;

    }

    clone() {
        const newBoard = new Board();

        newBoard.board = this.board.map(row =>
            row.map(piece => {
                if (piece === null) return null;

                return Object.assign(
                    Object.create(Object.getPrototypeOf(piece)),
                    piece
                );
            })
        );

        return newBoard;
    }

    getAllLegalMoves(isWhite) {



    }
}

export { Board };