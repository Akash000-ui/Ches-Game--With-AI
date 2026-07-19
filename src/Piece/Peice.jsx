export class Peice {
    isWhite;
    row;
    col;
    constructor(a, b, c) {
        this.isWhite = a;
        this.row = b;
        this.col = c;
    }

    getLegalMoves(board) {
        throw new Error("Must Implement getLegalMoves");
    }
}