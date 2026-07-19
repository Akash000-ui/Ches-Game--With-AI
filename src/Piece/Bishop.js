import { Peice } from "./Peice";


export class Bishop extends Peice {
    img;
    constructor(isWhite, row, col) {
        super(isWhite, row, col)
        this.isWhite ? this.img = "♗" : this.img = "♝";
    }

    getLegalMoves(board) {

        const moves = [];

        const directions = [
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1]
        ];

        for (const [dr, dc] of directions) {

            let r = this.row + dr;
            let c = this.col + dc;

            while (r >= 0 && r < 8 && c >= 0 && c < 8) {

                const piece = board.getPiece(r, c);

                if (piece === null) {

                    moves.push({ row: r, col: c });

                } else {

                    if (piece.isWhite !== this.isWhite) {

                        moves.push({ row: r, col: c });

                    }

                    break;
                }

                r += dr;
                c += dc;
            }
        }

        return moves;
    }

}