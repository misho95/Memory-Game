import { useEffect, useState } from "react";
import Dots from "./dots";

interface PropsType {
  activeSize: number;
}

const Board = ({ activeSize }: PropsType) => {
  const [dataBoard, setDataBoard] = useState([]);

  const createGameBoardValues = () => {
    //create board array
  };

  const calcBoard = () => {
    const board = [];
    for (let i = 0; i < activeSize; i++) {
      board.push(<Dots value={1} />);
    }

    const fullBoard = [];

    for (let x = 0; x < activeSize; x++) {
      fullBoard.push(board);
    }

    setDataBoard(fullBoard);
  };

  useEffect(() => {
    calcBoard();
    createGameBoardValues();
  }, []);

  console.log(dataBoard);
  return (
    <div className="flex flex-col gap-3 w-fit h-fit">
      {dataBoard &&
        dataBoard.map((b, index) => {
          return (
            <div key={index} className="flex gap-3">
              {b.map((r, index) => {
                return <div key={index}>{r}</div>;
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Board;
