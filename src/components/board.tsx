import { useEffect, useState } from "react";
import Dots from "./dots";

interface PropsType {
  activeSize: number;
}

const Board = ({ activeSize }: PropsType) => {
  const [dataBoard, setDataBoard] = useState<JSX.Element[]>([]);
  const [randomGame, setRandomGame] = useState<number[]>([]);

  const createGameBoardValues = () => {
    //create board array`
    const fullBoardDots = activeSize * activeSize;
    const maxNumberLimits = fullBoardDots / 2;
    const randomNumBoard = [];

    for (let i = 1; i <= maxNumberLimits; i++) {
      randomNumBoard.push(i);
      randomNumBoard.push(i);
    }

    setRandomGame(randomNumBoard);
  };

  const calcBoard = () => {
    const shuffledGame = [...randomGame];
    shuffleArray(shuffledGame);

    const board = [];
    for (let i = 0; i < activeSize * activeSize; i++) {
      board.push(<Dots value={shuffledGame[i]} activeSize={activeSize} />);
    }

    setDataBoard(board);
  };

  function shuffleArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    createGameBoardValues();
  }, []);

  useEffect(() => {
    calcBoard();
  }, [randomGame]);

  return (
    <div className="flex flex-col gap-3 w-fit h-fit">
      <div
        className={` ${
          activeSize === 4 ? "gap-customGap" : "gap-customGap2"
        } flex flex-wrap 
        w-w326_8  sm:w-w572`}
      >
        {dataBoard &&
          dataBoard.map((b, index) => {
            return <div key={index}>{b}</div>;
          })}
      </div>
    </div>
  );
};

export default Board;
