import { useState } from "react";

import { Board } from "./Piece/Board"

import ChessBoard from "./components/ChessBoard";

import initialBoard from "./data/initialBoard";

import "./styles/Board.css";

function App() {

  const [board, setBoard] = useState(new Board());

  const [whiteTurn, setWhiteTurn] = useState(true);

  const [selectedSquare, setSelectedSquare] =
    useState(null);

  const [possibleMoves, setPossibleMoves] =
    useState([]);



  function handleSquareClick(piece, r, c) {
    if (piece !== null) {
      // if (whiteTurn) {
      let moves = piece.getLegalMoves(board);
      setPossibleMoves(moves);
      setSelectedSquare({ row: r, col: c })
      // }
    } else {
      console.log("CALLED EMPTY SQUARE")
      console.log(r);
      console.log(c);
      const isThere = possibleMoves.find(
        move => move.row === r && move.col === c
      );
      if (isThere) {
        console.log("ITS THERE")
        board.updatePiece(
          selectedSquare.row,
          selectedSquare.col,
          r,
          c
        );
        setBoard(Object.assign(Object.create(Object.getPrototypeOf(board)), board));
        setPossibleMoves([]);
        setSelectedSquare(null)
        setWhiteTurn(false)
      } else {
        setPossibleMoves([]);
        setSelectedSquare(null)
      }
    }
  }
  return (
    <div className="app">

      <h1>Chess AI</h1>

      <ChessBoard
        board={board}
        selectedSquare={selectedSquare}
        possibleMoves={possibleMoves}
        onSquareClick={handleSquareClick}
        setPossibleMoves={setPossibleMoves}
      />

    </div>
  );
}

export default App;