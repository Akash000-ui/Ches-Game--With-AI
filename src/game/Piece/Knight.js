import { Board } from "../Board";
import { Peice } from "./Peice";

export class Knight extends Peice {
    img;
    constructor(isWhite, row, col) {
        super(isWhite, row, col)
        this.isWhite ? this.img = "♘" : this.img = "♞";
    }

    getLegalMoves(board) {

        let moves = [];

        const directions = [
            [1, 2],
            [1, -2],
            [-1, -2],
            [-1, 2],
            [2, 1],
            [2, -1],
            [-2, -1],
            [-2, 1]
        ]

        for (let [dr, dc] of directions) {
            let r = dr + this.row;
            let c = dc + this.col;

            if (r >= 0 && r < 8 && c >= 0 && c < 8) {
                if (board.getPiece(r, c) === null) {
                    moves.push({ row: r, col: c });
                } else {
                    if (board.getPiece(r, c).isWhite !== this.isWhite) {
                        moves.push({ row: r, col: c })
                    }
                }
            }
        }
        return moves;
    }

}