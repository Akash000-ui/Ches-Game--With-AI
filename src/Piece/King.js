import { Peice } from "./Peice";

export class King extends Peice {
    img;
    constructor(isWhite, row, col) {
        super(isWhite, row, col)
        isWhite ? this.img = "♕" : this.img = "♛";
    }

    getLegalMoves(board) {

    }

}