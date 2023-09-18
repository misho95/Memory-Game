import { useEffect, useState } from "react";
import Dots from "./dots";
import { v4 } from "uuid";
import { playersType } from "./game";

interface PropsType {
  activeSize: number;
  playerActive: number;
  players: playersType[];
  setPlayers: (arg: playersType[]) => void;
  changeToNextPlayer: () => void;
  activePlayers: number;
  moves: number;
  setMoves: (arg: number) => void;
  restartBoard: (
    setDataBoard: (arg: dataBoardType[] | null) => void,
    setActiveDots: (arg: activeDotsType[] | []) => void
  ) => void;
  restart: boolean;
}

export interface dataBoardType {
  id: string;
  type: string;
  value: number;
}

export interface activeDotsType {
  id: string;
}

const Board = ({
  activeSize,
  playerActive,
  players,
  setPlayers,
  changeToNextPlayer,
  activePlayers,
  moves,
  setMoves,
  restartBoard,
  restart,
}: PropsType) => {
  const [dataBoard, setDataBoard] = useState<dataBoardType[] | null>(null);
  const [activeDots, setActiveDots] = useState<activeDotsType[] | []>([]);

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const callRestartHandler = () => {
    restartBoard(setDataBoard, setActiveDots);
  };

  useEffect(() => {
    if (!restart) {
      callRestartHandler();
    }
  }, [restart]);

  useEffect(() => {
    if (!dataBoard) {
      const board = [];
      for (let i = 0; i < (activeSize * activeSize) / 2; i++) {
        board.push({ id: v4(), type: "default", value: i + 1 });
        board.push({ id: v4(), type: "default", value: i + 1 });
      }
      shuffleArray(board);
      setDataBoard(board);
    }
  }, [dataBoard]);

  useEffect(() => {
    setTimeout(() => {
      if (activeDots.length === 2) {
        ///forSinglePlayer
        if (activePlayers === 1) {
          setMoves(moves + 1);
        }

        const findFirstDot = dataBoard?.find((d) => {
          if (d.id === activeDots[0].id) {
            return d;
          }
        });
        const findSecondDot = dataBoard?.find((d) => {
          if (d.id === activeDots[1].id) {
            return d;
          }
        });

        if (findFirstDot && findSecondDot) {
          if (findFirstDot.value === findSecondDot.value) {
            const updateDataBoard = dataBoard?.map((x) => {
              if (findFirstDot.id === x.id) {
                return {
                  ...x,
                  type: "match",
                };
              } else if (findSecondDot.id === x.id) {
                return {
                  ...x,
                  type: "match",
                };
              } else {
                return x;
              }
            });

            if (updateDataBoard) {
              setDataBoard(updateDataBoard);
            }

            /// update players score
            const updatePlayers = players.map((p) => {
              if (p.id === playerActive) {
                return {
                  ...p,
                  score: p.score + 1,
                };
              } else {
                return p;
              }
            });
            const casterData: playersType[] = updatePlayers as playersType[];
            setPlayers(casterData);
          } else {
            const updateDataBoard = dataBoard?.map((x) => {
              if (findFirstDot.id === x.id) {
                return {
                  ...x,
                  type: "default",
                };
              } else if (findSecondDot.id === x.id) {
                return {
                  ...x,
                  type: "default",
                };
              } else {
                return x;
              }
            });

            if (updateDataBoard) {
              setDataBoard(updateDataBoard);
            }
          }
        }
        setActiveDots([]);
        changeToNextPlayer();
      }
    }, 1000);
  }, [activeDots]);

  return (
    <div className="flex flex-col gap-3 w-fit h-fit">
      <div
        className={` ${
          activeSize === 4 ? "gap-customGap" : "gap-customGap2"
        } flex flex-wrap 
        w-w326_8  sm:w-w572`}
      >
        {dataBoard?.map((b) => {
          return (
            <div key={b.id}>
              <Dots
                id={b.id}
                type={b.type}
                value={b.value}
                activeSize={activeSize}
                activeDots={activeDots}
                setActiveDots={setActiveDots}
                dataBoard={dataBoard}
                setDataBoard={setDataBoard}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
