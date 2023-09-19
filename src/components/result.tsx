import { useEffect, useState } from "react";
import { playersType } from "./game";
import ResultPlayers from "./result.players";

interface timeType {
  minuts: number;
  seconds: number;
}

interface PropsType {
  players: playersType[];
  setShow: (arg: boolean) => void;
  restartHandler: () => void;
  restartAndRedirect: () => void;
  activePlayers: number;
  moves: number;
  time: timeType;
}

const Result = ({
  players,
  setShow,
  restartHandler,
  restartAndRedirect,
  activePlayers,
  moves,
  time,
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
      <div className=" h-fit bg-white  p-10 rounded-lg w-11/12 sm:w-fit">
        {activePlayers === 1 && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              {playerResult && (
                <h1 className="text-center w-full text-blue font-semibold text-3xl">
                  You did it!{" "}
                </h1>
              )}
              <p className="text-center text-blueLight">
                Game over! here's how you got on...
              </p>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="bg-blueLigher p-2 rounded-lg flex justify-between gap-5">
                <span className="text-blueLight">Time Elapsed</span>
                <span className="text-blue text-xl font-semibold">
                  {time.minuts}:{time.seconds}
                </span>
              </div>
              <div className="bg-blueLigher p-2 rounded-lg flex justify-between gap-5">
                <span className="text-blueLight">Moves Taken</span>
                <span className="text-blue text-xl font-semibold">{moves}</span>
              </div>
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
                New Game
              </button>
            </div>
          </div>
        )}
        {activePlayers > 1 && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              {playerResult && (
                <h1 className="text-center w-full text-blue font-semibold text-3xl">
                  Player {playerResult[0].player} Wins!
                </h1>
              )}
              <p className="text-center text-blueLight">
                Game over! here are the results...
              </p>
            </div>
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
                New Game
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
