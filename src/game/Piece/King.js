import { Peice } from "./Peice";

export class King extends Peice {

    img;
    constructor(isWhite, row, col) {
        super(isWhite, row, col)
        this.isWhite ? this.img = "♔" : this.img = "♚";
    }

    getLegalMoves(board) {
        const directions = [
            [1, 0],
            [0, -1],
            [1, 1],
            [1, -1],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, -1]
        ]

        let moves = [];

        for (let [dr, dc] of directions) {
            let r = dr + this.row;
            let c = dc + this.col;

            if (r < 8 && r >= 0 && c < 8 && c >= 0) {

                let piece = board.getPiece(r, c);

                if (!piece || piece.isWhite !== this.isWhite) {
                    moves.push({ row: r, col: c });
                }
            }
        }
        return moves;
    }

}