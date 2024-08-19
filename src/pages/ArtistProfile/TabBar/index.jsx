import React, { useEffect, useState } from "react";
import TabView from "./TabView";
import { artistTabContent } from "../../../utils/content";
import { NFTData } from "../../../constants";

const TabBar = ({id,creator}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [data,setData] = useState(null);
  
  useEffect(()=>{
    const res = NFTData.filter(item => item.creator == id)
    const owned = NFTData.filter(item => item.owner == id)
    const collection = NFTData.filter(item => item.collection == id)
    setData([res,owned,collection])
  },[id])


  return (
    <div className="flex-1">
      <div
        className={`w-full border-t-2 border-lightGrey px-20 pt-2 mt-4 flex justify-evenly`}
      >
        { artistTabContent.map((item) => {
          return (
            <div
              onClick={() => setActiveTab(item.index)}
              className={`${
                item.index === activeTab ? "border-b-2 border-white" : ""
              } flex-1 flex justify-center  py-[30px]`}
            >
              <h2 className={` text-[16px] font-semibold ${item.index === activeTab ? "text-white":"text-textGrey"}`}>{item.label}</h2>
              <div>
                <h2 className="text-white bg-lightGrey px-4 mx-2 rounded-xl">
                  {item.content.length}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
      <TabView tabIndex={activeTab} data={data} creator={creator}/>
    </div>
  );
};

export default TabBar;
