import PieceView from "./PieceView";

function Square({
    row,
    col,
    piece,
    isLight,
    isSelected,
    isPossibleMove,
    onClick,
    board,
    setPossibleMoves
}) {

    let className = "square ";

    className += isLight ? "light " : "dark ";

    if (isSelected)
        className += "selected ";

    if (isPossibleMove)
        className += "possible ";

    return (
        <div
            className={className}
            onClick={() => { onClick(piece, row, col) }
            }
        >
            {piece && <PieceView piece={piece} />}
        </div>
    );
}

export default Square;