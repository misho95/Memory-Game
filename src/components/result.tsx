import { useEffect, useState } from "react";
import { playersType } from "./game";
import ResultPlayers from "./result.players";

interface PropsType {
  players: playersType[];
  setShow: (arg: boolean) => void;
  restartHandler: () => void;
  restartAndRedirect: () => void;
}

const Result = ({
  players,
  setShow,
  restartHandler,
  restartAndRedirect,
}: PropsType) => {
  const [playerResult, setPlayerResult] = useState<playersType[] | null>(null);

  useEffect(() => {
    const sortByScore = players.sort((a, b) => {
      return b.score - a.score;
    });
    setPlayerResult(sortByScore);
  }, []);

  return (
    <div className="bg-black/50 w-full h-screen fixed top-0 left-0 flex justify-center items-center z-50">
      <div className="flex flex-col gap-8 h-fit bg-white  p-10 rounded-lg w-11/12 sm:w-fit">
        <div className="flex flex-col gap-3 ">
          {playerResult?.map((pl, index) => {
            return (
              <ResultPlayers
                key={pl.id}
                id={pl.id}
                player={pl.player}
                score={pl.score}
                type={index === 0 ? false : true}
              />
            );
          })}
        </div>
        <div className="flex justify-between gap-5">
          <button
            onClick={() => {
              restartHandler(), setShow(false);
            }}
            className="bg-yellow h-10 w-20 md:w-w127 md:h-fit py-2 rounded-full text-white text-sm sm:text-md"
          >
            Restart
          </button>
          <button
            onClick={() => {
              restartAndRedirect(), setShow(false);
            }}
            className="bg-blueLigher h-10 w-20 md:w-w127 md:h-fit py-2 rounded-full text-blue text-sm sm:text-md"
          >
            Setup New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
