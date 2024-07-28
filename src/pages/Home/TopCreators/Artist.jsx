import React, { useState } from "react";
import { Link } from "react-router-dom";

const Artist = ({ item }) => {
  const [id, setID] = useState(0);
  return (
    <Link
      to={`/artist/${item.id}`}
      className="w-full relative bg-lightGrey items-center flex md:flex-col p-3 rounded-lg"
    >
      <h2 className="absolute bg-primary aspect-square w-8 flex items-center justify-center rounded-full text-lightText left-6 top-3">{item.id}</h2>
      <div className="w-32 h-32 flex items-center justify-center overflow-hidden rounded-full">
        <img className="w-full h-full object-fit" src={item.photo} />
      </div>
      <div className="flex-col p-4">
        <h2 className="text-white text-xl text-center font-bold">
          {item.name}
        </h2>
        <h2 className="text-white text-center">
          Total sales : {item.ethereumSales} ETH
        </h2>
      </div>
      <div className=""></div>
    </Link>
  );
};

export default Artist;
