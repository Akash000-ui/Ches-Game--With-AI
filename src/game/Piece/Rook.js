import { Peice } from "./Peice";

class Rook extends Peice {
    img;
    constructor(isWhite, row, col) {
        super(isWhite, row, col)
        this.isWhite ? this.img = "♖" : this.img = "♜";
    }

    getLegalMoves(board) {

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]

        let moves = [];

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

export { Rook };