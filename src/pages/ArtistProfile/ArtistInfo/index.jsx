import React, { useEffect, useState } from "react";
import { User } from "../../../assets";
import { TopCreators } from "../../../constants";

const ArtistInfo = ({artist}) => {
  return (
    <div className="w-full">
      <h2 className="text-white font-semibold text-[51px]">{artist?.name}</h2>
      <div className="md:hidden flex flex-col sm:flex-row my-4">
        <div className="p-4 sm:w-[186px] my-2 sm:my-0  bg-secondary rounded-xl flex mx-2">
          <img src={User} className="mr-2 " />
          <h2 className="text-white overflow-hidden">
            0fhsadfjsdfhsdfsjfsdjmxc01234546588
          </h2>
        </div>
        <div className="p-4 h-14 sm:w-[110px] border-secondary border-2 rounded-xl flex mx-2">
          <img src={User} className=" mr-2" />
          <h2 className="text-white">Follow</h2>
        </div>
      </div>
      <div className="flex justify-between w-full sm:w-[510px] md:pr-14 md:mt-2">
        <div className="flex-1">
          <h3
            className={`text-white text-[22px] leading-[35.2px] font-mono font-bold md:text-[28px]`}
          >
            {artist?.volumn}k+
          </h3>
          <h2
            className={`text-white font-normal text-[16px] leading-[22.4px] `}
          >
            Volumes
          </h2>
        </div>
        <div className="flex-1">
          <h3
            className={`text-white text-[22px]  xs:text-[28px] leading-[35.2px] font-mono font-bold md:text-[28px]`}
          >
            {artist?.nftSold}k+
          </h3>
          <h2
            className={`text-white font-normal text-[16px] leading-[22.4px] `}
          >
            NFTs Sold
          </h2>
        </div>
        <div className="flex-1">
          <h3
            className={`text-white text-[22px] xs:text-[28px] leading-[35.2px] font-mono font-bold md:text-[28px]`}
          >
            {artist?.followers}k+
          </h3>
          <h2
            className={`text-white font-normal text-[16px] leading-[22.4px] `}
          >
            Followers
          </h2>
        </div>
      </div>
      <div className="my-4 mb-4">
        <h2 className="text-lightText font-normal text-[16px] leading-[22.4px] my-2">
          Bio
        </h2>
        <p className="text-white leading-[22.4px] text-[16px]">
          {artist?.bio}
        </p>
      </div>
      <div className="my-4">
        <h2 className="text-lightText font-normal text-[16px] leading-[22.4px]">
          Links
        </h2>
        <div className="flex sm:w-[160px] justify-between mt-2">
          <img src={User} alt="hoobank" className="w-[20px] h-[25px] " />
          <img src={User} alt="hoobank" className="w-[20px] h-[25px] " />
          <img src={User} alt="hoobank" className="w-[20px] h-[25px] " />
          <img src={User} alt="hoobank" className="w-[20px] h-[25px] " />
          <img src={User} alt="hoobank" className="w-[20px] h-[25px] " />
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
