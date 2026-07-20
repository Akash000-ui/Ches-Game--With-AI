import { Peice } from "./Peice";

export class Queen extends Peice {
    img;
    constructor(isWhite, row, col) {
        super(isWhite, row, col)
        isWhite ? this.img = "♕" : this.img = "♛";
    }

    getLegalMoves(board) {
        let moves = [];

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


        for (let [dr, dc] of directions) {
            let r = this.row + dr;
            let c = this.col + dc;

            while (r < 8 && r >= 0 && c < 8 && c >= 0 && board.getPiece(r, c) === null) {
                moves.push({ row: r, col: c });
                r += dr;
                c += dc;
            }

            if (r < 8 && r >= 0 && c < 8 && c >= 0 && board.getPiece(r, c).isWhite !== this.isWhite) {
                moves.push({ row: r, col: c });
            }

        }

        return moves;
    }

}