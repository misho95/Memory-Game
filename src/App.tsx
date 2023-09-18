import Game from "./components/game";
import GamePanel from "./components/game.panel";
import { useState } from "react";

function App() {
  const [game, setGame] = useState(false);
  const [activeTheme, setActiveTheme] = useState(0);
  const [activePlayers, setActivePlayers] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const gameOn = (
    activeTheme: number,
    activePlayers: number,
    activeSize: number
  ) => {
    setGame(true);
    setActiveTheme(activeTheme);
    setActivePlayers(activePlayers);
    setActiveSize(activeSize);
  };

  return (
    <>
      {!game && <GamePanel game={gameOn} />}
      {game && (
        <Game
          activeTheme={activeTheme}
          activePlayers={activePlayers}
          activeSize={activeSize}
          setGame={setGame}
        />
      )}
    </>
  );
}

export default App;
