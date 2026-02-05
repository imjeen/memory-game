
import Icon from "./Icon";

interface TileProps {
    index: number; /* 序号 **/
    id: number;  /* 牌的id **/
    clickID: number[]; /* 已经点击的牌的id **/
    setClickID: (id: number[]) => void;  /* 设置已经点击的牌的id **/
    clickSVG: number[];  /* 已经点击的牌的svg **/
    setClickSVG: (svg: number[]) => void;  /* 设置已经点击的牌的svg **/
    check: (id: number) => void;  /* 检查牌是否匹配 **/
    openCards: number[];  /* 已经打开的牌的id **/
    disabled: boolean;  /* 是否禁用 **/
    wonCards: number[];  /* 已经匹配的牌的id **/
}
function Tile({
    index: svgNo,
    id,
    clickID,
    setClickID,
    clickSVG,
    setClickSVG,
    check,
    openCards,
    disabled,
    wonCards
}: TileProps) {

    function handleClickTile(id: any, svgNo: any) {
        // console.log(`click`)
        if (!clickID.includes(id)) {
            clickID.push(id);
            clickSVG.push(svgNo);
            setClickID(clickID);
            setClickSVG(clickSVG)
        }
        check(id);
    }

    return (

        <button disabled={disabled} onClick={() => { handleClickTile(id, svgNo) }} className="tile">
            <div className="tile-flip"
                style={{
                    transform: openCards.includes(id) ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
            >
                <div className="front"></div>
                <div className="back"
                    style={{
                        backgroundColor: wonCards.includes(id) ? "#60dd8e" : "#f6fcb4"
                    }}
                >
                    <Icon className="icon" svgNo={svgNo} />
                </div>
            </div>

        </button>
    )
}




export default Tile;