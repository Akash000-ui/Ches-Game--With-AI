import { useState } from "react";

import { Board } from "./game/Board"

import ChessBoard from "./components/ChessBoard";

import initialBoard from "./data/initialBoard";

import "./styles/Board.css";

import { Game } from "./game/Game";

function App() {

  const [game, setGame] = useState(new Game());

  function handleSquareClick(piece, row, col) {

    game.handleSquareClick(piece, row, col);

    setGame(Object.assign(
      Object.create(Object.getPrototypeOf(game)),
      game
    ));

  }

  return (
    <ChessBoard
      game={game}
      onSquareClick={handleSquareClick}
    />
  );
}

export default App;
