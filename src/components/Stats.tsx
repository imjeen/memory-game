import React from "react";
import { useGame } from "../context/GameContext";

const Stats: React.FC = () => {
    const { state, actions } = useGame();
    const { seconds, moves, score, startText } = state;

    return (
        <div className="display-container">
            <div className="time">时间: {seconds}s</div>
            <div className="moves">步数: {moves}</div>
            <div className="score">分数: {score}</div>
            <button onClick={() => actions.restart()} className="start">
                {startText}
            </button>
        </div>
    );
};

export default Stats;
