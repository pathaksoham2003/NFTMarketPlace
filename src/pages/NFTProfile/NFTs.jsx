import React from "react";
import Obsidian from "../../images/Obsidian.png?react";

const NFTs = () => {
  return (
    <div className="w-full bg-lightGrey flex items-center flex-col rounded-lg">
      <div className="w-full aspect-[7/6] flex items-center rounded-t-lg justify-center overflow-hidden">
        <img
          className="w-full h-full object-fit"
          src={Obsidian}
        />
      </div>
      <div className="sm:h-1/5 flex items-start pl-5 w-full flex-col pt-4 bg-lightGrey rounded-b-xl flex-1 h-full">
        <h2 className="text-white font-bold text-xl">Space Walking</h2>
        <div className="flex items-center  pt-2">
          <img
            src="/mnt/data/image.png"
            alt="Author"
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-white">Animakid</span>
        </div>{" "}
        <div className="flex w-full justify-between">
        <h2 className="text-white font-bold text-xl py-5">Price <br/> 1.63 ETH</h2>
        <h2 className="text-white font-bold text-xl p-5">Highest bid <br/>0.33 wETH</h2>
        
        </div>
      </div>
    </div>
  );
};

export default NFTs;
