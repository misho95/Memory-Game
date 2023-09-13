interface PropsType {
  id: number;
  active: number;
  text: string;
  score: number;
}

const Players = ({ id, active, text, score }: PropsType) => {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={`w-w256 h-h72 ${
          active === id ? "bg-yellow" : "bg-blueLigher"
        } rounded-lg flex justify-between items-center p-6 relative`}
      >
        {active === id && (
          <div
            className="absolute -top-5 left-1/2 -translate-x-1/2 w-0 h-0 
  border-l-[18px] border-l-transparent
  border-b-[20px] border-b-yellow
  border-r-[18px] border-r-transparent"
          ></div>
        )}
        <span
          className={`${
            active === id ? "text-white" : "text-blueLight"
          } select-none text-lg`}
        >
          {text}
        </span>
        <span
          className={`font-bold text-3xl ${
            active ? "text-white" : "text-blue"
          } select-none`}
        >
          {score}
        </span>
      </div>
      {active === id && (
        <div className="text-blue text-center font-semibold">Current Turn</div>
      )}
    </div>
  );
};

export default Players;