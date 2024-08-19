import React, { useState } from "react";
import NFTs from "../../../components/NFT";


const BrowseTabs = ({tabIndex,setTabIndex,data}) => {
  
  return (
    <div className="w-full flex items-center  flex-col">
      <div className="w-full max-w-[1180px] flex">
        <div onClick={()=>setTabIndex(0)} className={`w-1/2 flex justify-center items-center text-center border-white ${tabIndex == 0 ? "border-b-2":""}`}>
          <h2 className="py-4 text-white">NFTs</h2>
          <h2 className="px-3 py-1 mx-4 bg-lightGrey text-white rounded-2xl">
            100
          </h2>
        </div>
        <div onClick={()=>setTabIndex(1)} className={`w-1/2 flex justify-center items-center text-center border-white ${tabIndex == 1 ? "border-b-2":""}`}>
          <h2 className="py-4 text-white">Collections</h2>
          <h2 className="px-3 py-1 mx-4 bg-lightGrey text-white rounded-2xl">
            67
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-lightGrey border-b-4 border-primary">
        <div className="w-full max-w-[1240px] grid grid-cols-3 gap-8 p-8 py-10 bg-lightGrey">
          {data && data[tabIndex].map((item) => (
            <NFTs data={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseTabs;
