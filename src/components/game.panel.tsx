import Button from "./button";
import { useState } from "react";

const GamePanel = ({ game }) => {
  const [activeTheme, setActiveTheme] = useState(1);
  const [activePlayers, setActivePlayers] = useState(1);
  const [activeSize, setActiveSize] = useState(1);

  const gameOn = () => {
    game(activeTheme, activePlayers, activeSize);
  };

  return (
    <div className="w-full min-h-screen bg-blue flex flex-col gap-10 justify-center items-center">
      <h1 className="text-center text-xl text-gray">Memory</h1>
      <div className="bg-gray p-10 rounded-lg w-w327 sm:w-w654 flex flex-col gap-6">
        {/* //selectTheme */}
        <div className="flex flex-col gap-3">
          <h1 className="text-blueLight">Select Theme</h1>
          <div className="flex justify-around gap-3">
            <Button
              id={1}
              text={"Numbers"}
              width={"w-w134 sm:w-w256"}
              active={activeTheme}
              setActive={setActiveTheme}
            />
            <Button
              id={2}
              text={"Icons"}
              width={"w-w134 sm:w-w256"}
              active={activeTheme}
              setActive={setActiveTheme}
            />
          </div>
        </div>
        {/* //Number of Players */}
        <div className="flex flex-col gap-3">
          <h1 className="text-blueLight">Number of Players</h1>
          <div className="flex justify-around gap-3">
            <Button
              id={1}
              text={"1"}
              width={"w-w62 sm:w-w119"}
              active={activePlayers}
              setActive={setActivePlayers}
            />
            <Button
              id={2}
              text={"2"}
              width={"w-w62 sm:w-w119"}
              active={activePlayers}
              setActive={setActivePlayers}
            />
            <Button
              id={3}
              text={"3"}
              width={"w-w62 sm:w-w119"}
              active={activePlayers}
              setActive={setActivePlayers}
            />
            <Button
              id={4}
              text={"4"}
              width={"w-w62 sm:w-w119"}
              active={activePlayers}
              setActive={setActivePlayers}
            />
          </div>
        </div>
        {/* //Grid Size */}
        <div className="flex flex-col gap-3">
          <h1 className="text-blueLight">Grid Size</h1>
          <div className="flex justify-around gap-3">
            <Button
              id={1}
              text={"4x4"}
              width={"w-w134 sm:w-w256"}
              active={activeSize}
              setActive={setActiveSize}
            />
            <Button
              id={2}
              text={"6x6"}
              width={"w-w134 sm:w-w256"}
              active={activeSize}
              setActive={setActiveSize}
            />
          </div>
        </div>
        <button
          onClick={gameOn}
          className="bg-yellow rounded-full py-2 text-white"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default GamePanel;
