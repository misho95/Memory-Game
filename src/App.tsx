import Game from "./components/game";
import GamePanel from "./components/game.panel";
import { useState } from "react";

function App() {
  const [game, setGame] = useState(false);

  const gameOn = (activeTheme, activePlayers, activeSize) => {
    setGame(true);
  };

  return (
    <>
      {!game && <GamePanel game={gameOn} />}
      {game && <Game />}
    </>
  );
}

export default App;
