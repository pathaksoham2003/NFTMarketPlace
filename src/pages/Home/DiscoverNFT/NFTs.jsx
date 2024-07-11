import React from "react";
import { PaintBrush } from "../../../assets";

const NFTs = () => {
  return (
    <div className="w-full bg-lightGrey flex items-center flex-col rounded-lg">
      <div className="w-full aspect-[7/6] flex items-center rounded-t-lg justify-center overflow-hidden">
        <img
          className="w-full h-full object-fit"
          src="https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Euj9mfGtsiSpDywOSUnJsmikd9K7LN2TgZmZAdARIb2U6P6fKGXUCk8iROOZeUe9E8ZDBAIxiLx67yJPHgw1ez2-A5bQNSnrSe~vMypJOlBOvloIDPnC-HWGT0Bcw~8CDmGBHuM7m0exB99ACPrE4rE7l71~WemzPXec0y9kv2b5zUQRqIJETDDXDjC2Ez0as9FZkRhXHIJiXPyv213ZVUBZIXowCk1e5-baIS9HqzV~n870OCIkvPQpFBkeczXjKF68c9OvpdEhh3Ngt1W4qgdhoxZ-BuHBqlTPxO9a7~N5sGsD47Y5hI~eONFA6H6JAVQgZosVlvDV3za4L4QlCQ__"
        />
      </div>
      <div className="sm:h-1/5 flex items-start pl-5 w-full flex-col pt-4 bg-lightGrey rounded-b-xl flex-1 h-full">
        <h2 className="text-white font-bold text-xl">Space Walking</h2>
        <div className="flex items-center  pt-2">
          <img
            src="/mnt/data/image.png"
            alt="Author"
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-white">Animakid</span>
        </div>{" "}
        <div className="flex w-full justify-between">
        <h2 className="text-white font-bold text-xl py-5">Price <br/> 1.63 ETH</h2>
        <h2 className="text-white font-bold text-xl p-5">Highest bid <br/>0.33 wETH</h2>
        
        </div>
      </div>
    </div>
  );
};

export default NFTs;
