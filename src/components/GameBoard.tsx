import React from "react";
import Tile from "./Tile";

interface GameBoardProps {
    matrix: number[][];
    openCards: number[];
    wonCards: number[];
    disabled: boolean;
    onTileClick: (id: number, svgNo: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
    matrix,
    openCards,
    wonCards,
    disabled,
    onTileClick,
}) => {
    return (
        <div className="board">
            {matrix.map((row, rowIndex) =>
                row.map((svgNo, colIndex) => {
                    const id = rowIndex * 4 + colIndex + 1;
                    return (
                        <Tile
                            key={id}
                            id={id}
                            svgNo={svgNo}
                            isOpen={openCards.includes(id)}
                            isWon={wonCards.includes(id)}
                            isDisabled={disabled}
                            onClick={onTileClick}
                        />
                    );
                })
            )}
        </div>
    );
};

export default GameBoard;
