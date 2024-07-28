import React from "react";
import { Link } from "react-router-dom";

const NFTs = ({ data }) => {
  return (
    <Link to={`/nft/0`} className="w-full bg-primary flex items-center flex-col rounded-lg">
      <div className="w-full aspect-[7/6] flex items-center rounded-t-lg justify-center overflow-hidden">
        <img className="w-full h-full object-fit" src={data.nftImg} />
      </div>
      <div className="sm:h-1/5 flex items-start pl-5 w-full flex-col pt-4 bg-primary rounded-b-xl flex-1 h-full">
        <h2 className="text-white font-bold text-xl">{data.nft}</h2>
        <div className="flex items-center  pt-2">
          <img
            src={data.creatorImg}
            alt="Author"
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-white">{data.creator}</span>
        </div>{" "}
        <div className="flex w-full justify-between">
          <h2 className="text-white font-bold text-xl py-5">
            Price <br />
            {data.price + " "} ETH
          </h2>
          <h2 className="text-white font-bold text-xl p-5">
            Highest bid <br />
            {data.highestBid + " "} wETH
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default NFTs;
