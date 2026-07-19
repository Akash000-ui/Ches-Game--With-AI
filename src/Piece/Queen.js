import { Peice } from "./Peice";

export class Queen extends Peice {
    img;
    constructor(isWhite, row, col) {
        super(isWhite, row, col)
        this.isWhite ? this.img = "♔" : this.img = "♚";
    }

    getLegalMoves(board) {

    }

}