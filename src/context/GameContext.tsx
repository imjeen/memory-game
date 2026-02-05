import React, { createContext, useContext, type ReactNode } from "react";
import { useMemoryGame, type MemoryGameState } from "../hooks/useMemoryGame";

/**
 * 游戏上下文类型接口
 */
interface GameContextType {
    state: MemoryGameState; // 游戏状态，包含当前棋盘、翻开的方块、匹配状态等
    actions: {
        restart: () => number[][]; // 重新开始游戏的函数
        handleTileClick: (id: number, svgNo: number) => void; // 处理方块点击事件的函数
    };
}

/**
 * 创建游戏 React 上下文
 */
const GameContext = createContext<GameContextType | undefined>(undefined);

/**
 * 游戏提供者组件 (Provider)
 * 包装在应用顶层，用于向所有子组件共享游戏逻辑和状态
 */
export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const game = useMemoryGame();

    return (
        <GameContext.Provider value={game}>
            {children}
        </GameContext.Provider>
    );
};

/**
 * 自定义 Hook：useGame
 * 方便组件快速获取游戏上下文中的 state 和 actions
 * @throws {Error} 如果在 GameProvider 之外使用则会抛出异常
 */
export const useGame = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error("useGame must be used within a GameProvider");
    }
    return context;
};
