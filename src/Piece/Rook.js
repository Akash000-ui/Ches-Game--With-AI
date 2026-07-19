import { Peice } from "./Peice";

class Rook extends Peice {
    img;
    constructor(isWhite, row, col) {
        super(isWhite, row, col)
        this.isWhite ? this.img = "♖" : this.img = "♜";
    }

    getLegalMoves(board) {

    }

}

export { Rook };