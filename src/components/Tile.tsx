import React from "react";
import Icon from "./Icon";
import { useGame } from "../context/GameContext";

interface TileProps {
    id: number;
    svgNo: number;
}

const Tile: React.FC<TileProps> = ({ id, svgNo }) => {
    const { state, actions } = useGame();
    const { openCards, wonCards, /*disabled*/ } = state;

    const isOpen = openCards.includes(id);
    const isWon = wonCards.includes(id);
    // const isDisabled = disabled;

    return (
        <button
            // disabled={isDisabled}
            onClick={() => actions.handleTileClick(id, svgNo)}
            className="tile"
        >
            <div
                className="tile-flip"
                style={{
                    transform: isOpen ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                <div className="front"></div>
                <div
                    className="back"
                    style={{
                        backgroundColor: isWon ? "#60dd8e" : "#f6fcb4",
                    }}
                >
                    <Icon svgNo={svgNo} />
                </div>
            </div>
        </button>
    );
};

export default Tile;