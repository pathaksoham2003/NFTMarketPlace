import React, { useState } from "react";
import { PaintBrush } from "../../../assets";
import { Link } from "react-router-dom";
import PsychoDog from "../../../images/PsychoDog.png?react";
const Collection = ({item}) => {
  return (
    <Link to={`/nft/${item.id}`} className="w-full bg-primary flex items-center flex-col rounded-3xl">
      <div className="w-full p-2 aspect-square flex items-center rounded-lg justify-center overflow-hidden">
        <img
          className="w-full h-full object-fit rounded-lg"
          src={item.mainImg}
        />
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="w-1/3 m-2  aspect-square flex items-center rounded-lg justify-center overflow-hidden">
          <img
            className="w-full h-full object-fit"
            src={item.subImgOne}
          />
        </div>
        <div className="w-1/3 m-2  aspect-square flex items-center rounded-lg justify-center overflow-hidden">
          <img
            className="w-full h-full object-fit"
            src={item.subImgTwo}
          />
        </div>
        <div className="w-1/3 m-2 content-center bg-secondary  aspect-square flex items-center rounded-lg justify-center overflow-hidden">
          1524+
        </div>
      </div>
      <div className="sm:h-1/5 flex items-start pl-5 w-full flex-col pt-2 pb-4 rounded-b-xl flex-1 h-full">
        <h2 className="text-white font-bold text-xl">{item.title}</h2>
        <div className="flex items-center  pt-2">
          <img
            src={item.cratorAvatar}
            alt="Author"
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-white">{item.creator}</span>
        </div>{" "}
      </div>{" "}
    </Link>
  );
};

export default Collection;
