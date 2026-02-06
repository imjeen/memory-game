import { GameProvider, useGame } from "./context/GameContext";
import Stats from "./components/Stats";
import GameBoard from "./components/GameBoard";

export default function App() {
  return (
    <GameProvider>
      <div className="github-ribbon">
        <a href="https://github.com/imjeen/memory-game" target="_blank" rel="noopener noreferrer">Star on GitHub</a>
      </div>
      <h1 className="heading">记忆翻牌：水果乐园</h1>
      <GameContent />
    </GameProvider>
  );
}

function GameContent() {
  const { state, actions } = useGame();

  const handleDimensionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    actions.restart(parseInt(e.target.value));
  };

  return (
    <>
      <GameBoard />
      <div style={{ margin: '20px auto', textAlign: 'center' }}>
        <label htmlFor="dimension-select" style={{ marginRight: '10px', color: '#1d743e', fontWeight: 'bold' }}>矩阵大小: </label>
        <select
          id="dimension-select"
          value={state.dimension}
          onChange={handleDimensionChange}
          style={{ padding: '5px', borderRadius: '5px', border: '1px solid #0c3939' }}
        >
          <option value="2">2 x 2</option>
          <option value="4">4 x 4</option>
          <option value="6">6 x 6</option>
          <option value="8">8 x 8</option>
        </select>
      </div>
      <Stats />
      <div className="win-message">{state.winMessage}</div>

    </>
  );
}
