
import { useEffect, useState } from "react";
import Tile from "./components/Tile";

export default function App() {

  function getRandomIndex(arr: any[]) {
    return (Math.floor(Math.random() * arr.length));
  }

  let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let [matrix, setMatrix] = useState<number[][]>([[], [], [], []]);


  useEffect(() => {
    setMatrix(restart())
    // eslint-disable-next-line
  }, [])




  let [clickID, setClickID] = useState<number[]>([]); // 已经点击的牌的id
  let [clickSVG, setClickSVG] = useState<number[]>([]) // 已经点击的牌的svg
  let [openCards, setOpenCards] = useState<number[]>([]) // 已经打开的牌的id
  let [score, setScore] = useState(0); // 分数
  let [moves, setMoves] = useState(0); // 步数
  let [disabled, SetDisabled] = useState(false); // 是否禁用
  let [wonCards, setWonCards] = useState<number[]>([]); // 已经匹配的牌的id
  let [start, setStart] = useState("开始") // 开始按钮的文字
  let [winMessage, setWinMessage] = useState("") // 胜利信息
  let [timer, setTimer] = useState(false) // 是否计时
  let [seconds, setSeconds] = useState(0) // 计时
  // console.log(clickID, clickSVG)


  useEffect(() => {
    if (timer === true) {
      setTimeout(() => {
        // console.log(seconds)
        // eslint-disable-next-line
        seconds += 1;
        setSeconds(seconds)
      }, 1000)
    }
  }, [timer, seconds])

  function restart() {
    setTimer(false)
    setSeconds(0)
    let matrix = [[], [], [], []] as number[][]
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 4; i++) {
        let randomIndex = getRandomIndex(arr)
        matrix[j].push(arr[randomIndex]);
        arr.splice(randomIndex, 1)
      }
    }
    // console.log(matrix)
    setClickID([])
    setClickSVG([])
    setOpenCards([])
    setMoves(0)
    setScore(0)
    SetDisabled(false)
    setWinMessage("")
    setWonCards([])
    setTimeout(() => {
      setTimer(false)
      setSeconds(0)
    }, 1005)

    return matrix;
  }


  function check(id: number) {
    setTimer(true)
    setStart("重新开始");
    setOpenCards([...openCards, id])
    // console.log(clickID, clickSVG)
    if (clickSVG.length === 2) {
      SetDisabled(true)
      setMoves(moves + 1);
      // console.log(`2 tiles are clicked`)
      if (clickSVG[0] === clickSVG[1]) {
        setTimeout(() => {
          setWonCards([...wonCards, ...clickID])
          setClickSVG([])
          setClickID([])
          setScore(score + 1)
        }, 500)
      }
      if (clickSVG[0] !== clickSVG[1]) {
        setTimeout(() => {
          setClickSVG([])
          setClickID([])
          openCards.pop();
          setOpenCards(openCards);
        }, 500)

      }
    }
    setTimeout(() => {
      SetDisabled(false)
    }, 1000)

    if (openCards.length >= 15) {
      SetDisabled(true)
      setTimer(false)
      // console.log(`win`)
      setWinMessage(`你用了 ${moves + 1} 步，花费了 ${seconds + 1} 秒！`)
    }
  }

  return (
    <>
      <h1 className="heading">翻翻看</h1>

      <div className="display-container">
        <div className="time">时间: {seconds}s</div>
        <div className="moves">步数: {moves}</div>
        <div className="score">分数: {score}</div>
        <button onClick={() => setMatrix(restart())} className="start">{start}</button>

      </div>

      <div className="win-message">{winMessage}</div>
      <div className="board">
        {matrix.map(arr => {
          return (
            arr.map(index => {
              let key = keys[0];
              keys.splice(0, 1)
              return (
                <Tile
                  clickID={clickID}
                  setClickID={setClickID}
                  clickSVG={clickSVG}
                  setClickSVG={setClickSVG}
                  key={key}
                  index={index}
                  id={key}
                  check={check}
                  disabled={disabled}
                  openCards={openCards}
                  wonCards={wonCards}
                />
              )
            })
          )

        })}
      </div>


    </>
  )
}

