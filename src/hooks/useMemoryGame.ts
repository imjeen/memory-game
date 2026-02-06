import { useState, useEffect, useCallback } from "react";
import { generateGameMatrix } from "../utils/matrix";
import { useTimer } from "./useTimer";

/**
 * 记忆游戏状态接口
 */
export interface MemoryGameState {
  matrix: number[][]; // nxn 游戏矩阵，存放图标编号
  clickID: number[]; // 当前点击的卡片 ID 列表
  clickSVG: number[]; // 当前点击的卡片对应的图标编号列表
  openCards: number[]; // 当前已翻开（但未配对成功）的卡片 ID
  score: number; // 当前得分（配对成功的对数）
  moves: number; // 翻牌步数
  disabled: boolean; // 是否禁用点击（翻牌动画期间）
  wonCards: number[]; // 已成功配对的卡片 ID 列表
  startText: string; // 按钮文字（“开始”或“重新开始”）
  winMessage: string; // 胜利提示信息
  seconds: number; // 游戏耗时（秒）
  isTimerRunning: boolean; // 计时器是否运行中
}

/**
 * 记忆游戏逻辑 Hook
 */
export function useMemoryGame() {
  const [dimension, setDimension] = useState(4);
  const [matrix, setMatrix] = useState<number[][]>([]);
  const [clickID, setClickID] = useState<number[]>([]);
  const [clickSVG, setClickSVG] = useState<number[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [wonCards, setWonCards] = useState<number[]>([]);
  const [startText, setStartText] = useState("开始");
  const [winMessage, setWinMessage] = useState("");

  // 引入计时器功能
  const { seconds, isActive: isTimerRunning, start: startTimer, stop: stopTimer, reset: resetTimer } = useTimer();

  /**
   * 重置/重新开始游戏
   */
  const restart = useCallback((newDimension?: number | React.MouseEvent) => {
    resetTimer(); // 重置计时

    // 检查 newDimension 是否为有效的数字（防止 Event 对象被当作数字）
    const d = typeof newDimension === 'number' ? newDimension : dimension;
    if (typeof newDimension === 'number') setDimension(newDimension);

    // 生成新的随机 NxN 矩阵
    const newMatrix = generateGameMatrix(d, d);

    setMatrix(newMatrix);
    setClickID([]);
    setClickSVG([]);
    setOpenCards([]);
    setMoves(0);
    setScore(0);
    setDisabled(false);
    setWinMessage("");
    setWonCards([]);

    return newMatrix;
  }, [resetTimer, dimension]);

  // 初始化游戏
  useEffect(() => {
    restart();
  }, [restart]);

  /**
   * 处理卡片点击事件
   * @param id 卡片唯一标识
   * @param svgNo 卡片图标编号
   */
  const handleTileClick = (id: number, svgNo: number) => {
    // 如果已禁用、卡片已找回或卡片已翻开，则不响应点击
    if (disabled || wonCards.includes(id) || openCards.includes(id)) return;

    // 第一次点击时启动计时器
    if (!isTimerRunning) {
      startTimer();
    }
    setStartText("重新开始");

    const newOpenCards = [...openCards, id];
    setOpenCards(newOpenCards);

    const newClickID = [...clickID, id];
    const newClickSVG = [...clickSVG, svgNo];

    setClickID(newClickID);
    setClickSVG(newClickSVG);

    // 计算总卡片数（确保是偶数）
    const totalCards = dimension * dimension % 2 === 0 ? dimension * dimension : dimension * dimension - 1;

    // 当点击了两张卡片时
    if (newClickSVG.length === 2) {
      setDisabled(true); // 暂时禁用点击
      setMoves((m) => m + 1); // 步数加一

      if (newClickSVG[0] === newClickSVG[1]) {
        // 卡片配对成功
        setTimeout(() => {
          const updatedWonCards = [...wonCards, ...newClickID];
          setWonCards(updatedWonCards);
          setClickSVG([]);
          setClickID([]);
          setScore((s) => s + 1);
          setDisabled(false);

          // 所有卡片均已配对成功
          if (updatedWonCards.length === totalCards) {
            stopTimer(); // 停止计时
            setWinMessage(`你用了 ${moves + 1} 步，花费了 ${seconds} 秒！`);
          }
        }, 500);
      } else {
        // 卡片配对失败
        setTimeout(() => {
          setClickSVG([]);
          setClickID([]);
          // 将翻开的卡片重新盖上
          setOpenCards((prev) => prev.filter((cardId) => !newClickID.includes(cardId)));
          setDisabled(false);
        }, 500);
      }
    }
  };

  return {
    state: {
      dimension,
      matrix,
      clickID,
      clickSVG,
      openCards,
      score,
      moves,
      disabled,
      wonCards,
      startText,
      winMessage,
      seconds,
      isTimerRunning,
    },
    actions: {
      restart,
      handleTileClick,
    },
  };
}
