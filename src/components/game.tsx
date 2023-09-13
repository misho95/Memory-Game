import Board from "./board";
import Players from "./players";

const Game = () => {
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
        <div>
          <Board />
        </div>
        <div className="flex justify-between gap-3">
          <Players active={false} text={"Player 1"} score={4} />
          <Players active={true} text={"Player 2"} score={5} />
          <Players active={false} text={"Player 3"} score={2} />
          <Players active={false} text={"Player 4"} score={0} />
        </div>
      </div>
    </div>
  );
};

export default Game;
