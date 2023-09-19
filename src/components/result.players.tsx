interface PropsType {
  id: number;
  player: string;
  score: number;
  type: boolean;
}

const ResultPlayers = ({ id, player, score, type }: PropsType) => {
  return (
    <div
      key={id}
      className={`flex gap-5 justify-between w-full sm:w-80 ${
        type ? "bg-blueLigher" : "bg-blue"
      } p-2 rounded-lg`}
    >
      <span
        className={`${
          type ? "text-blue" : "text-white"
        } flex gap-1 justify-center items-center`}
      >
        Player{player}
        <span>{!type && "(winner)"}</span>
      </span>
      <span
        className={`${
          type ? "text-blue" : "text-white"
        } font-semibold text-xl flex gap-1`}
      >
        {score}
        <span>Pairs</span>
      </span>
    </div>
  );
};

export default ResultPlayers;
