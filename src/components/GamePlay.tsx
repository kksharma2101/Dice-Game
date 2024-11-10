import React, { useState } from "react";
import RoleDice from "./RoleDice";

const numberData: number[] = [1, 2, 3, 4, 5, 6];

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState<number>();
  const [rollDice, setRollDice] = useState<number>(1);
  const [totalScore, setTotalScore] = useState<number>(0);

  const handleRollDice = () => {
    const randomNumber: number = Math.floor(Math.random() * (7 - 1) + 1);
    setRollDice(randomNumber);
    if (rollDice === selectedNumber) {
      setTotalScore((prev) => (prev += selectedNumber));
    } else {
      setTotalScore((prev) => (prev -= selectedNumber!));
    }
    setSelectedNumber(undefined);
  };

  const handleResetScore = () => {
    setTotalScore(0);
  };

  return (
    <section>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="">
          <h1 className="text-center font-semibold text-7xl">{totalScore}</h1>
          <p className="">Total Score</p>
        </div>
        <div className="">
          <h3 className="text-red-500 text-end h-8">
            {selectedNumber === undefined
              ? "You have not selected any number"
              : ""}
          </h3>
          <div className="flex items-center justify-end gap-5">
            {numberData.map((num) => (
              <div
                className={
                  num === selectedNumber
                    ? "w-8 py-1 rounded-md cursor-pointer text-white bg-black border border-black"
                    : "border-black border w-8 py-1 rounded-md cursor-pointer hover:text-white hover:bg-black"
                }
                key={num}
              >
                <h3
                  className="text-center"
                  onClick={() => setSelectedNumber(num)}
                >
                  {num}
                </h3>
              </div>
            ))}
          </div>
          <p className="text-black font-bold mt-5 text-end">Select Number</p>
        </div>
      </div>
      <div className="mt-20">
        <RoleDice
          handleRollDice={selectedNumber !== undefined ? handleRollDice : null}
          rollDice={rollDice}
          handleResetScore={handleResetScore}
        />
      </div>
    </section>
  );
};

export default GamePlay;
