import { activeDotsType, dataBoardType } from "./board";

interface PropsType {
  id: string;
  value: number | string;
  icons: boolean;
  activeSize: number;
  activeDots: activeDotsType[];
  setActiveDots: (arg: activeDotsType[]) => void;
  type: string;
  dataBoard: dataBoardType[];
  setDataBoard: (arg: dataBoardType[]) => void;
}

const Dots = ({
  id,
  value,
  icons,
  activeSize,
  activeDots,
  setActiveDots,
  type,
  dataBoard,
  setDataBoard,
}: PropsType) => {
  const showAndHide = () => {
    if (activeDots.length < 2) {
      setActiveDots([...activeDots, { id }]);

      const updateType: dataBoardType[] = dataBoard.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            type: "flip",
          };
        } else {
          return data;
        }
      });
      setDataBoard(updateType);
    }
  };

  return (
    <div
      className={`${
        activeSize === 4
          ? "w-w72_5 h-h72_5 sm:w-w118 sm:h-h118"
          : " w-w46_8 h-h46_8 sm:w-w82 sm:h-h82"
      } relaitve overflow-hidden rounded-full `}
    >
      <div
        onClick={() => {
          type === "default" && showAndHide();
        }}
        className={`${
          activeSize === 4
            ? "w-w72_5 h-h72_5 sm:w-w118 sm:h-h118"
            : " w-w46_8 h-h46_8 sm:w-w82 sm:h-h82"
        } rounded-full  absolute ${
          type !== "default" ? "bg-transparent" : "bg-blue"
        } duration-500`}
      ></div>

      <div
        className={`${
          activeSize === 4
            ? "w-w72_5 h-h72_5 sm:w-w118 sm:h-h118"
            : " w-w46_8 h-h46_8 sm:w-w82 sm:h-h82"
        } rounded-full ${
          type === "flip"
            ? "bg-yellow"
            : type === "match"
            ? "bg-blueLigher"
            : ""
        } text-white flex justify-center items-center text-2xl sm:text-5xl select-none`}
      >
        {icons ? (
          <span className="flex justify-center items-center">
            <span className="material-symbols-outlined text-5xl">{value}</span>
          </span>
        ) : (
          <span>{value}</span>
        )}
      </div>
    </div>
  );
};

export default Dots;
