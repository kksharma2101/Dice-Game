import React from "react";
import Image from "next/image";
import img from "../../public/dice-pic.png";

const HomeComponents = ({ toggle }: any) => {
  return (
    <>
      <section className="max-w-[1122px] h-screen gap-16 flex item-center justify-center">
        <div className="flex justify-center items-center">
          <Image src={img} alt="" className="w-96" />
        </div>
        <div className="flex justify-center items-end flex-col gap-5">
          <h1 className="text-black text-5xl font-extrabold text-nowrap">
            DICE GAME
          </h1>
          <button
            className="bg-black py-1 w-48 cursor-pointer rounded-md font-semibold text-white"
            onClick={toggle}
          >
            Play Now
          </button>
        </div>
      </section>
    </>
  );
};
export default HomeComponents;
