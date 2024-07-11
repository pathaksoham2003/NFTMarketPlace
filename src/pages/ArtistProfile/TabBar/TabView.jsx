import React from "react";
import { artistTabView } from "../../../utils/content";
import NFTs from "./NFTs";

const TabView = ({ tabIndex }) => {
  return (
    <div className="grid bg-lightGrey px-2 md:px-20 sm:px-14 gap-2 sm:gap-4 md:gap-4 py-10 border-b-2 border-primary grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
      {artistTabView[tabIndex].map((item) => {
        return <NFTs data={item} />;
      })}
    </div>
  );
};

export default TabView;
