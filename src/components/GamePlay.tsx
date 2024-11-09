import React from "react";

const selectedNum = [1, 2, 3, 4, 5, 6];

const GamePlay = () => {
  return (
    <section>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="">
          <h1 className="text-center font-semibold text-7xl">0</h1>
          <p className="">Total Score</p>
        </div>
        <div className="">
          <div className="flex items-center justify-end gap-5">
            {selectedNum.map((num) => (
              <div
                className="border-black border py-2 px-4 rounded-md cursor-pointer hover:text-white hover:bg-black"
                key={num}
              >
                <h3 className="">{num}</h3>
              </div>
            ))}
          </div>
          <p className="text-black font-bold mt-5 text-end">Select Number</p>
        </div>
      </div>
      <div className=""></div>
    </section>
  );
};

export default GamePlay;
