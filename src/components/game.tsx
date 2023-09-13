import { useEffect, useState } from "react";
import Board from "./board";
import Players from "./players";

interface PropsType {
  activeTheme: number;
  activePlayers: number;
  activeSize: number;
}

const Game = ({ activeTheme, activePlayers, activeSize }: PropsType) => {
  interface playersType {
    id: number;
    player: string;
    score: number;
  }

  const [players, setPlayers] = useState<playersType[]>([]);
  const [playerActive, setPlayerActive] = useState(0);
  const [loading, setLoading] = useState(true);

  console.log(activeTheme, setPlayerActive);

  useEffect(() => {
    console.log(activePlayers);
    const data: playersType[] = [];
    for (let i = 0; i < activePlayers; i++) {
      data.push({ id: i, player: `player ${i + 1}`, score: 0 });
    }

    const casterData: playersType[] = data as playersType[];
    setPlayers(casterData);
    setLoading(false);
  }, [activePlayers]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray">
      <div className="flex flex-col w-w1110 gap-10">
        <div className="flex justify-between">
          <h1 className="text-blue text-xl font-bold">MEMORY</h1>
          <div className="flex gap-3">
            <button className="bg-yellow w-w127 py-2 rounded-full text-white">
              Restart
            </button>
            <button className="bg-blueLigher w-w127 py-2 rounded-full text-blue">
              New Game
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Board activeSize={activeSize} />
        </div>
        <div className="flex justify-center gap-8">
          {!loading &&
            players.map((p) => {
              return (
                <Players
                  id={p.id}
                  active={playerActive}
                  text={p.player}
                  score={p.score}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Game;
