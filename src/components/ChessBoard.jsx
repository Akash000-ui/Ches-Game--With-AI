import Square from "./Square";

function ChessBoard({
    board,
    selectedSquare,
    possibleMoves,
    onSquareClick,
    setPossibleMoves
}) {

    return (
        <div className="board">
            {console.log("FIRST")}

            {board.getSquares().map((row, r) =>

                row.map((piece, c) => {

                    const isLight = (r + c) % 2 === 0;

                    const isSelected =
                        selectedSquare &&
                        selectedSquare.row === r &&
                        selectedSquare.col === c;

                    const isPossibleMove =
                        possibleMoves.some(
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
                            board={board}
                            setPossibleMoves={setPossibleMoves}
                        />
                    );
                })

            )}

        </div>
    );
}

export default ChessBoard;