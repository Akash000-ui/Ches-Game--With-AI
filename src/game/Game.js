import { Board } from "./Board";

import { useState } from "react";


export class Game {


    constructor() {
        this.whiteTurn = true;
        this.board = new Board();
        this.selectedPiece = null;
        this.possibleMoves = [];
    }


    clearSelection() {
        this.possibleMoves = [];
        this.selectedPiece = null;
    }


    moveSelectedPiece(r, c) {

        this.board.makeMove(this.selectedPiece.row, this.selectedPiece.col, r, c);

        this.clearSelection();
    }



    handleSquareClick(piece, r, c) {

        if (this.selectedPiece !== null) {
            if (piece !== null) {

                if (this.whiteTurn) {
                    console.log("NP")


                    const isThere = this.possibleMoves.find(

                        move => move.row === r && move.col === c

                    );
                    if (isThere) {

                        this.moveSelectedPiece(r, c);

                        this.clearSelection();

                        // this.whiteTurn = !this.whiteTurn;
                    } else {
                        this.clearSelection();

                        let moves = piece.getLegalMoves(this.board);

                        this.possibleMoves = moves;

                        this.selectedPiece = piece;
                    }
                }
            } else {
                const isThere = this.possibleMoves.find(

                    move => move.row === r && move.col === c

                );
                if (isThere) {

                    console.log("YES THERE IT IS")

                    this.moveSelectedPiece(r, c);

                    // this.whiteTurn = !this.whiteTurn;

                } else {
                    this.clearSelection();
                }
            }
        } else if (piece !== null) {
            this.selectedPiece = piece;
            let moves = piece.getLegalMoves(this.board);

            this.possibleMoves = moves;

        }
    }

    clone() {

        const newGame = new Game();

    }



}