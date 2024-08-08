import React from "react";

const Creator = ({ item }) => {
  return (
    <div className="flex w-full bg-lightGrey my-2 rounded-3xl ">
      <div className="flex flex-1 items-center py-3">
        <div className="w-8 h-8 flex justify-center items-center text-lightText bg-primary  rounded-full mx-4">
          {item.index + 1}
        </div>
        <div className="aspect-square w-14 rounded-full overflow-hidden">
          <img src={item.photo} />
        </div>
        <div className="px-10 py-2 text-white font-semibold text-2xl">{item.name}</div>
      </div>
      <div className="flex items-center">
        <div className="px-10 mr-12 py-2 text-lg text-green-500">+{item.nftSold * 0.23}</div>
        <div className="px-10 mr-12 py-2 text-lg text-white">{item.nftSold}</div>
        <div className="px-10 mr-12 py-2 text-lg text-white">{item.volumn} ETH</div>
      </div>
    </div>
  );
};

export default Creator;
