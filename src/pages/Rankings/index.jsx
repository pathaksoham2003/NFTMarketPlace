import React from "react";
import RankInfo from "./RankInfo";
import RankTabs from "./RankTabs";

const Rankings = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <RankInfo />
      <RankTabs />
    </div>
  );
};

export default Rankings;
