import React from "react";
import { PaintBrush } from "../../../assets";

const Category = () => {
  return (
    <div className="w-full  bg-lightGrey flex items-center flex-col rounded-lg">
      <div style={{backgroundImage:"url('https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg')"}} className="w-full aspect-square flex items-center rounded-t-lg justify-center  overflow-hidden">
        <img src={PaintBrush} className="absolute z-15 "/>
        <img
          className="w-full h-full object-fit blur-sm"
          src=""
        />
      </div>
      <h2 className="text-white w-full p-3 text-xl font-bold">Soham</h2>
    </div>
  );
};

export default Category;
