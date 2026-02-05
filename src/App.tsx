import { useMemoryGame } from "./hooks/useMemoryGame";
import Stats from "./components/Stats";
import GameBoard from "./components/GameBoard";

export default function App() {
  const { state, actions } = useMemoryGame();

  return (
    <>
      <h1 className="heading">翻翻看</h1>

      <Stats
        seconds={state.seconds}
        moves={state.moves}
        score={state.score}
        startText={state.startText}
        onRestart={actions.restart}
      />

      <div className="win-message">{state.winMessage}</div>

      <GameBoard
        matrix={state.matrix}
        openCards={state.openCards}
        wonCards={state.wonCards}
        disabled={state.disabled}
        onTileClick={actions.handleTileClick}
      />
    </>
  );
}
