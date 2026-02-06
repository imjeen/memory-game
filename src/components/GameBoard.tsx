import React from "react";
import Tile from "./Tile";
import { useGame } from "../context/GameContext";

const GameBoard: React.FC = () => {
    const { state } = useGame();
    const { matrix } = state;

    return (
        <div
            className="board"
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${state.dimension}, 1fr)`,
                width: 'fit-content',
                maxWidth: '95vw',
                padding: '10px'
            }}
        >
            {matrix.map((row, rowIndex) =>
                row.map((svgNo, colIndex) => {
                    const id = rowIndex * state.dimension + colIndex + 1;
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
