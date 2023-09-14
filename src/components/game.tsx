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

  console.log(activeTheme, setPlayerActive);

  useEffect(() => {
    console.log(activePlayers);
    const data: playersType[] = [];
    for (let i = 0; i < activePlayers; i++) {
      data.push({ id: i, player: `player ${i + 1}`, score: 0 });
    }

    const casterData: playersType[] = data as playersType[];
    setPlayers(casterData);
  }, [activePlayers]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray">
      <div className="flex flex-col w-w1110 gap-10">
        <div className="flex justify-between">
          <h1 className="text-blue text-xl font-bold select-none">MEMORY</h1>
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
          {activePlayers > 1 &&
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
          {activePlayers === 1 && (
            <div className="flex justify-center gap-8">
              <div className="w-w256 h-h72 bg-blueLigher rounded-full flex justify-between items-center p-6">
                <span className="text-blueLight select-none text-lg">Time</span>
                <span className="font-bold text-3xl select-none text-blue">
                  00:00
                </span>
              </div>
              <div className="w-w256 h-h72 bg-blueLigher rounded-full flex justify-between items-center p-6">
                <span className="text-blueLight select-none text-lg">
                  Moves
                </span>
                <span className="font-bold text-3xl select-none text-blue">
                  0
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
