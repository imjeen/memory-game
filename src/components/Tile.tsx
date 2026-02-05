import Icon from "./Icon";

interface TileProps {
    id: number;
    svgNo: number;
    isOpen: boolean;
    isWon: boolean;
    isDisabled: boolean;
    onClick: (id: number, svgNo: number) => void;
}

const Tile: React.FC<TileProps> = ({
    id,
    svgNo,
    isOpen,
    isWon,
    isDisabled,
    onClick,
}) => {
    return (
        <button
            disabled={isDisabled}
            onClick={() => onClick(id, svgNo)}
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
                    <Icon className="icon" svgNo={svgNo} />
                </div>
            </div>
        </button>
    );
};

export default Tile;