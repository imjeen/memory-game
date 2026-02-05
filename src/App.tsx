import { GameProvider, useGame } from "./context/GameContext";
import Stats from "./components/Stats";
import GameBoard from "./components/GameBoard";

export default function App() {
  return (
    <GameProvider>
      <h1 className="heading">翻翻看</h1>
      <GameContent />
    </GameProvider>
  );
}

function GameContent() {
  const { state } = useGame();
  return (
    <>
      <Stats />
      <div className="win-message">{state.winMessage}</div>
      <GameBoard />
    </>
  );
}
