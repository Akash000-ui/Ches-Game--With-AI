import { Peice } from "./Peice";

export class Pawn extends Peice {
    img;
    hasMoved = false;
    constructor(isWhite, row, col) {
        super(isWhite, row, col)
        this.isWhite ? this.img = "♙" : this.img = "♟";
    }

    getLegalMoves(board) {
        const moves = [];

        const dir = this.isWhite ? -1 : 1;

        // One square forward
        if (board.getPiece(this.row + dir, this.col) === null) {
            moves.push({
                row: this.row + dir,
                col: this.col
            });

            // Two squares on first move
            if (
                !this.hasMoved &&
                board.getPiece(this.row + 2 * dir, this.col) === null
            ) {
                moves.push({
                    row: this.row + 2 * dir,
                    col: this.col
                });
            }
        }

        // Capture left
        const left = board.getPiece(this.row + dir, this.col - 1);

        if (left && left.isWhite !== this.isWhite) {
            moves.push({
                row: this.row + dir,
                col: this.col - 1
            });
        }

        // Capture right
        const right = board.getPiece(this.row + dir, this.col + 1);

        if (right && right.isWhite !== this.isWhite) {
            moves.push({
                row: this.row + dir,
                col: this.col + 1
            });
        }

        return moves;
    }

}