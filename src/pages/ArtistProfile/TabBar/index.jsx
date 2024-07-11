import React, { useState } from "react";
import TabView from "./TabView";
import { artistTabContent } from "../../../utils/content";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex-1">
      <div
        className={`w-full border-t-2 border-lightGrey px-20 pt-2 mt-4 flex justify-evenly`}
      >
        {artistTabContent.map((item) => {
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
      <TabView tabIndex={activeTab} />
    </div>
  );
};

export default TabBar;
