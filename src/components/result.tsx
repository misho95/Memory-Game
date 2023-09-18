import { playersType } from "./game";

interface PropsType {
  players: playersType[];
}

const Result = ({ players }: PropsType) => {
  return (
    <div className="bg-black/50 w-full h-screen fixed top-0 left-0 flex justify-center items-center">
      <div className="bg-white p-5 flex flex-col gap-3">
        {players.map((pl) => {
          return (
            <div key={pl.id} className="flex gap-5 justify-between w-60">
              <span>Player{pl.player}</span>
              <span>{pl.score}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Result;
