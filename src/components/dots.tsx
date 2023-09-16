import { useState } from "react";

interface PropsType {
  value: number;
  activeSize: number;
}

const Dots = ({ value, activeSize }: PropsType) => {
  const [show, setShow] = useState(false);

  const showAndHide = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
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
        onClick={showAndHide}
        className={`${
          activeSize === 4
            ? "w-w72_5 h-h72_5 sm:w-w118 sm:h-h118"
            : " w-w46_8 h-h46_8 sm:w-w82 sm:h-h82"
        } rounded-full  absolute ${
          show ? "bg-transparent" : "bg-blue"
        } duration-500`}
      ></div>

      <div
        className={`${
          activeSize === 4
            ? "w-w72_5 h-h72_5 sm:w-w118 sm:h-h118"
            : " w-w46_8 h-h46_8 sm:w-w82 sm:h-h82"
        } rounded-full bg-yellow text-white flex justify-center items-center text-2xl sm:text-5xl select-none`}
      >
        {value}
      </div>
    </div>
  );
};

export default Dots;
