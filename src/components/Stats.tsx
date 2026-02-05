import React from "react";

interface StatsProps {
    seconds: number;
    moves: number;
    score: number;
    startText: string;
    onRestart: () => void;
}

const Stats: React.FC<StatsProps> = ({
    seconds,
    moves,
    score,
    startText,
    onRestart,
}) => {
    return (
        <div className="display-container">
            <div className="time">时间: {seconds}s</div>
            <div className="moves">步数: {moves}</div>
            <div className="score">分数: {score}</div>
            <button onClick={onRestart} className="start">
                {startText}
            </button>
        </div>
    );
};

export default Stats;
