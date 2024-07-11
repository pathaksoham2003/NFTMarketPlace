import React from "react";
import { User } from "../../../assets";

const ButtonGroup = () => {
  return (
    <div className="hidden md:flex ml-auto w-auto">
      <div className="p-4 h-14 sm:w-[186px]  bg-secondary rounded-xl flex mx-2">
        <img src={User} className="mr-2" />
        <h2 className="text-white overflow-hidden">
          0fhsadfjsdfhsdfsjfsdjmxc01234546588
        </h2>
      </div>
      <div className="p-4 h-14 sm:w-[110px] border-secondary border-2 rounded-xl flex mx-2">
        <img src={User} className=" mr-2" />
        <h2 className="text-white">Follow</h2>
      </div>
    </div>
  );
};

export default ButtonGroup;
