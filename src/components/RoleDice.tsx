import Image from "next/image";
import React, { useState } from "react";
import ShowRules from "./ShowRules";

interface Model {
  rollDice: number;
  handleRollDice: () => void;
}

const RoleDice = ({ rollDice, handleRollDice, handleResetScore }: any) => {
  const [showRules, setShowRules] = useState(false);

  const handleShowRules = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center flex-col gap-7">
      <div
        className="cursor-pointer flex items-center flex-col gap-4"
        onClick={handleRollDice}
      >
        <Image
          src={`/dice-${rollDice}.png`}
          alt="Dice"
          width={100}
          height={100}
        />
      </div>
      <h3 className="text-sm font-medium">Click on dice to roll</h3>
      <div className="flex flex-col gap-4">
        <button
          className="border border-black font-bold rounded-md w-40 py-1"
          onClick={handleResetScore}
        >
          Reset Score
        </button>
        <button
          onClick={handleShowRules}
          className="w-40 bg-black font-bold text-white rounded-md py-1 hover:bg-white hover:text-black border-black border"
        >
          Show Rules
        </button>
      </div>
      {showRules ? <ShowRules /> : ""}
    </div>
  );
};

export default RoleDice;
