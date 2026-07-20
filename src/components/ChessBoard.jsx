import Square from "./Square";

function ChessBoard({
    game,
    onSquareClick
}) {


    return (
        <div className="board">

            {game.board.getSquares().map((row, r) =>

                row.map((piece, c) => {

                    const isLight = (r + c) % 2 === 0;

                    const isSelected =
                        game.selectedPiece &&
                        game.selectedPiece.row === r &&
                        game.selectedPiece.col === c;

                    const isPossibleMove =
                        game.possibleMoves.some(
                            move =>
                                move.row === r &&
                                move.col === c
                        );

                    return (
                        <Square
                            key={`${r}-${c}`}
                            row={r}
                            col={c}
                            piece={piece}
                            isLight={isLight}
                            isSelected={isSelected}
                            isPossibleMove={isPossibleMove}
                            onClick={onSquareClick}
                            board={game.board}
                        />
                    );
                })

            )}

        </div>
    );
}

export default ChessBoard;