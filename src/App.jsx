import { useState } from "react";

import { Board } from "./Piece/Board"

import ChessBoard from "./components/ChessBoard";

import initialBoard from "./data/initialBoard";

import "./styles/Board.css";

function App() {

  const [board, setBoard] = useState(new Board());

  const [whiteTurn, setWhiteTurn] = useState(true);

  const [selectedPiece, setSelectedPiece] =
    useState(null);

  const [possibleMoves, setPossibleMoves] =
    useState([]);


  function clearSelection() {
    setPossibleMoves([]);
    setSelectedPiece(null);
  }


  function moveSelectedPiece(r, c) {

    let copyBoard = board.clone();

    copyBoard.makeMove(selectedPiece.row, selectedPiece.col, r, c);

    setBoard(copyBoard);

    clearSelection();
  }



  function handleSquareClick(piece, r, c) {
    if (piece !== null) {
      if (whiteTurn) {

        const isThere = possibleMoves.find(
          move => move.row === r && move.col === c
        );
        if (isThere) {
          moveSelectedPiece(r, c);
          clearSelection();
          // setWhiteTurn(false)
        } else {
          clearSelection();
          let moves = piece.getLegalMoves(board);
          setPossibleMoves(moves);
          setSelectedPiece({ row: r, col: c })
        }
      }
    } else {
      console.log("CALLED EMPTY SQUARE")
      console.log(r);
      console.log(c);
      const isThere = possibleMoves.find(
        move => move.row === r && move.col === c
      );
      if (isThere) {
        moveSelectedPiece(r, c);
        clearSelection();
        // setWhiteTurn(false)
      } else {
        clearSelection();
      }
    }

  }
  return (
    <div className="app">

      <h1>Chess AI</h1>

      <ChessBoard
        board={board}
        selectedPiece={selectedPiece}
        possibleMoves={possibleMoves}
        onSquareClick={handleSquareClick}
        setPossibleMoves={setPossibleMoves}
      />

    </div>
  );
}

export default App;