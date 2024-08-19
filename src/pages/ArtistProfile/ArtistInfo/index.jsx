import React, { useEffect, useState } from "react";
import { User } from "../../../assets";
import { TopCreators } from "../../../constants";
import { Google, LinkedIn, Whatsapp } from "../../../icons";
import { goLi, goMail, goPh, goPort, goWa } from "../../../utils/utilsFunction";

const ArtistInfo = ({ artist }) => {
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
        <p className="text-white leading-[22.4px] text-[16px]">{artist?.bio}</p>
      </div>
      <div className="my-4">
        <h2 className="text-lightText font-normal text-[16px] leading-[22.4px]">
          Links
        </h2>
        <div className="flex sm:w-[160px] justify-between mt-2">
          <img src={Google} className="h-4 mx-2" onClick={goMail} />
          <img src={LinkedIn} className="h-4 mx-2" onClick={goLi} />
          <img src={Whatsapp} className="h-4 mx-2" onClick={goWa} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 mr-2 fill-white"
            onClick={goPh}
          >
            <path
              fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clip-rule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 stroke-white"
            onClick={goPort}
          >
            <path
              fill-rule="evenodd"
              d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
