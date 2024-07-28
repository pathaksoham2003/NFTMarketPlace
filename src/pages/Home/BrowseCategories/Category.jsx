import React from "react";
import { PaintBrush } from "../../../assets";

const Category = ({item}) => {
  return (
    <div className="w-full  bg-lightGrey flex items-center flex-col rounded-lg">
      <div className={`relative w-full aspect-square flex items-center rounded-t-lg justify-center overflow-hidden`}>
        <img
          className="w-full h-full z-0 object-fit blur-sm"
          src={item.image}
        />
        <img src={item.icon} className="absolute top-1/3 left-1/3 z-15"/>
      </div>
      <h2 className="text-white w-full p-3 text-xl font-bold">{item.name}</h2>
    </div>
  );
};

export default Category;
