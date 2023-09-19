import { useEffect, useState } from "react";
import Board, { activeDotsType, dataBoardType } from "./board";
import Players from "./players";
import Result from "./result";

interface PropsType {
  activeTheme: number;
  activePlayers: number;
  activeSize: number;
  setGame: (arg: boolean) => void;
}

export interface playersType {
  id: number;
  player: string;
  score: number;
}

const Game = ({
  setGame,
  activeTheme,
  activePlayers,
  activeSize,
}: PropsType) => {
  const [players, setPlayers] = useState<playersType[]>([]);
  const [playerActive, setPlayerActive] = useState(0);
  const [moves, setMoves] = useState(0);
  const [restart, setRestart] = useState(false);
  const [show, setShow] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minuts, setMinuts] = useState(0);
  const [started, setStarted] = useState(false);
  const [intervalId, setIntervalId] = useState<number | undefined>(); // Initialize intervalId to null

  const changeToNextPlayer = () => {
    if (players.length > playerActive + 1) {
      setPlayerActive(playerActive + 1);
    } else {
      setPlayerActive(0);
    }
  };

  const restartHandler = () => {
    setRestart(false);
    setPlayers([]);
    setPlayerActive(0);
    setMoves(0);
    setSeconds(0);
    setMinuts(0);
  };

  const restartBoard = (
    setDataBoard: (arg: dataBoardType[] | null) => void,
    setActiveDots: (arg: activeDotsType[] | []) => void
  ) => {
    setDataBoard(null), setActiveDots([]);
  };

  const restartAndRedirect = () => {
    restartHandler();
    setGame(false);
  };

  const showResult = () => {
    setShow(true);
    stopTimer();
  };

  useEffect(() => {
    if (!restart) {
      const data: playersType[] = [];
      for (let i = 0; i < activePlayers; i++) {
        data.push({ id: i, player: `${i + 1}`, score: 0 });
      }

      const casterData: playersType[] = data as playersType[];
      setPlayers(casterData);
      setRestart(true);
    }
  }, [activePlayers, players, moves]);

  const startTimer = () => {
    const timerInterval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    setIntervalId(timerInterval);
  };

  const stopTimer = () => {
    // Clear the interval and reset the intervalId
    clearInterval(intervalId);
    setIntervalId(undefined);

    // Update the started flag to indicate that the timer has been stopped
    setStarted(false);
  };

  useEffect(() => {
    if (moves !== 0 && !started) {
      startTimer();
      setStarted(true);
    }
  }, [moves, setMoves]);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinuts(minuts + 1);
    }
  }, [seconds]);

  return (
    <>
      {show && (
        <Result
          players={players}
          setShow={setShow}
          restartHandler={restartHandler}
          restartAndRedirect={restartAndRedirect}
          activePlayers={activePlayers}
          moves={moves}
          time={{ minuts, seconds }}
        />
      )}
      <div className="w-full min-h-screen flex justify-center items-center bg-gray">
        <div className="flex flex-col w-11/12 md:w-w689 lg:w-w1110 gap-10">
          <div className="flex justify-between">
            <h1 className="text-blue text-xl font-bold select-none">MEMORY</h1>
            <div className="flex gap-3">
              <button
                onClick={restartHandler}
                className="bg-yellow h-10 w-20 md:w-w127 md:h-fit py-2 rounded-full text-white text-sm sm:text-md"
              >
                Restart
              </button>
              <button
                onClick={restartAndRedirect}
                className="bg-blueLigher h-10 w-20 md:w-w127 md:h-fit py-2 rounded-full text-blue text-sm sm:text-md"
              >
                New Game
              </button>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <Board
              activeSize={activeSize}
              changeToNextPlayer={changeToNextPlayer}
              playerActive={playerActive}
              players={players}
              setPlayers={setPlayers}
              activePlayers={activePlayers}
              moves={moves}
              setMoves={setMoves}
              restartBoard={restartBoard}
              restart={restart}
              showResult={showResult}
              activeTheme={activeTheme}
            />
          </div>
          <div className="flex justify-center gap-8">
            {activePlayers > 1 &&
              players.map((p) => {
                return (
                  <Players
                    key={p.id}
                    id={p.id}
                    active={playerActive}
                    text={p.player}
                    score={p.score}
                  />
                );
              })}
            {activePlayers === 1 && (
              <div className="flex justify-center gap-8">
                <div className="w-w151 sm:w-w256 h-h72 bg-blueLigher rounded-full flex flex-col sm:flex-row justify-between items-center p-1 sm:p-6">
                  <span className="text-blueLight select-none text-lg">
                    Time
                  </span>
                  <span className="font-bold text-3xl select-none text-blue">
                    <span>{minuts < 10 ? `0${minuts}` : minuts} </span>
                    <span>:</span>
                    <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                  </span>
                </div>
                <div className="w-w151 sm:w-w256 h-h72 bg-blueLigher rounded-full flex flex-col sm:flex-row justify-between items-center p-1 sm:p-6">
                  <span className="text-blueLight select-none text-lg">
                    Moves
                  </span>
                  <span className="font-bold text-3xl select-none text-blue">
                    {moves}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
