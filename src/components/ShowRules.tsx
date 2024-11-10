import React from "react";

const ShowRules = () => {
  return (
    <div className="max-w-[794px] bg-red-50 p-3 m-2">
      <h1 className="font-bold pb-3 text-xl">How to play dice game</h1>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        After click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p>If you get wrong guess then 2 point will be deducted</p>
    </div>
  );
};

export default ShowRules;
