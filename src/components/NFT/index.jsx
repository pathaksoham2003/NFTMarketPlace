import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TopCreators } from "../../constants";

const NFTs = ({ data, background = "bg-primary" }) => {
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const temp = TopCreators.filter((item) => item.id === data.creator);
    setCreator(temp[0]);
  }, []);

  return (
    <Link
      to={`/nft/${data.id}`}
      className={`w-full ${background}} flex items-center flex-col rounded-lg`}
    >
      <div className="w-full aspect-[7/6] flex items-center rounded-t-lg justify-center overflow-hidden">
        <img className="w-full h-full object-fit" src={data.image} />
      </div>
      <div
        className={`sm:h-1/5 flex items-start pl-5 w-full flex-col pt-4 ${background} rounded-b-xl flex-1 h-full`}
      >
        <h2 className="text-white font-bold text-2xl">{data.title}</h2>
        <Link to={`/artist/${creator?.id}`} className="flex items-center  pt-4">
          <img
            src={creator?.photo}
            alt="Author"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-white">{creator?.name}</span>
        </Link>{" "}
        <div className="flex w-full justify-between">
          <h2 className="text-lightText text-sm py-4 pr-2">
            Price <br />
            <h2 className="text-white text-xl font-semibold">
              {data.price + " "} ETH
            </h2>
          </h2>
          <h2 className="text-lightText text-sm py-4 pr-5">
            Highest bid <br />
            <h2 className="text-white text-xl font-semibold">
              {data.highestBid + " "} wETH
            </h2>
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default NFTs;
