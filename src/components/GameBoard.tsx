import React from "react";
import Tile from "./Tile";
import { useGame } from "../context/GameContext";

const GameBoard: React.FC = () => {
    const { state } = useGame();
    const { matrix } = state;

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
                        />
                    );
                })
            )}
        </div>
    );
};

export default GameBoard;
