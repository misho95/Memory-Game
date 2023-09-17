import { useEffect, useState } from "react";
import Dots from "./dots";
import { v4 } from "uuid";

interface PropsType {
  activeSize: number;
}

export interface dataBoardType {
  id: string;
  type: string;
  value: number;
}

export interface activeDotsType {
  id: string;
}

const Board = ({ activeSize }: PropsType) => {
  const [dataBoard, setDataBoard] = useState<dataBoardType[] | null>(null);
  const [activeDots, setActiveDots] = useState<activeDotsType[]>([]);

  useEffect(() => {
    const board = [];
    for (let i = 0; i < (activeSize * activeSize) / 2; i++) {
      board.push({ id: v4(), type: "default", value: i + 1 });
      board.push({ id: v4(), type: "default", value: i + 1 });
    }
    setDataBoard(board);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (activeDots.length === 2) {
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
