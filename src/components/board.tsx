import Dots from "./dots";

interface PropsType {
  activeSize: number;
}

const Board = ({ activeSize }: PropsType) => {
  console.log(activeSize);
  return (
    <div className="flex flex-col gap-3 w-fit h-fit">
      <div className="flex gap-3">
        <Dots />
        <Dots />
        <Dots />
        <Dots />
      </div>
    </div>
  );
};

export default Board;
