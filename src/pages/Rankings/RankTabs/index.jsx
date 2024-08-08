import React, { useState } from "react";
import { TopCreators } from "../../../constants";
import Creator from "../Creator";
import { User } from "../../../assets";

const RankTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="w-full flex items-center  flex-col">
      <div className="w-full max-w-[1180px] flex">
        <div
          onClick={() => setTabIndex(0)}
          className={`w-1/2 flex justify-center items-center text-center border-white ${
            tabIndex == 0 ? "border-b-2" : ""
          }`}
        >
          <h2
            className={`py-4 text-lightText font-semibold ${
              tabIndex == 0 ? "text-white" : ""
            }`}
          >
            Today
          </h2>
        </div>
        <div
          onClick={() => setTabIndex(1)}
          className={`w-1/2 flex justify-center items-center text-center border-white ${
            tabIndex == 1 ? "border-b-2" : ""
          }`}
        >
          <h2
            className={`py-4 text-lightText font-semibold ${
              tabIndex == 1 ? "text-white" : ""
            }`}
          >
            This Week
          </h2>
        </div>
        <div
          onClick={() => setTabIndex(2)}
          className={`w-1/2 flex justify-center items-center text-center border-white ${
            tabIndex == 2 ? "border-b-2" : ""
          }`}
        >
          <h2
            className={`py-4 text-lightText font-semibold ${
              tabIndex == 2 ? "text-white" : ""
            }`}
          >
            This Month
          </h2>
        </div>
        <div
          onClick={() => setTabIndex(3)}
          className={`w-1/2 flex justify-center items-center text-center border-white ${
            tabIndex == 3 ? "border-b-2" : ""
          }`}
        >
          <h2
            className={`py-4 text-lightText font-semibold ${
              tabIndex == 3 ? "text-white" : ""
            }`}
          >
            All Time
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[1240px] mb-20 flex flex-col ">
          <div className="flex w-full my-3 pr-6 border mt-10 border-lightText rounded-3xl">
            <div className="flex flex-1">
              <div className="px-10 py-2 text-lightText font-semibold text-lg">#</div>
              <div className="px-10 py-2 text-lightText font-semibold text-lg">Artist</div>
            </div>
            <div className="flex items-center">
              <div className="px-10 pr-14 text-lightText font-semibold text-lg">Change</div>
              <div className="px-10 pr-16 text-lightText font-semibold text-lg">NFTs Sold</div>
              <div className="px-10 pr-16 text-lightText font-semibold text-lg">Volumn</div>
            </div>
          </div>
          {TopCreators.map((item,index) => (
            <Creator item={{index:index,...item}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankTabs;
