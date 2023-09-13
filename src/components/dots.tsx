import { useState } from "react";

const Dots = ({}) => {
  const [show, setShow] = useState(false);

  const showAndHide = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  return (
    <div className="w-w82 h-h82 relaitve">
      {!show && (
        <div
          onClick={showAndHide}
          className="w-w82 h-h82 rounded-full bg-blue absolute"
        ></div>
      )}
      <div className="w-w82 h-h82 rounded-full bg-yellow text-white flex justify-center items-center text-4xl select-none">
        4
      </div>
    </div>
  );
};

export default Dots;
