import React, { useEffect, useState } from "react";
import { TopCreators } from "../../../constants";
import { BannerImage } from "../../../images/images";

const Banner = ({ artist }) => {

  return (
    <div className="w-full sm:h-[280px] md:h-[320px] h-[250px]">
      <div className="relative z-10 bg-gradient-to-t from-[#9747FF] sm:h-[280px] md:h-[320px] w-full overflow-visible h-[250px]">
        <img
          className="object-cover object-center w-full h-full mix-blend-overlay"
          src={BannerImage}
        />
        <div className="absolute bottom-0 left-20 -mb-[60px] w-[120px] h-[120px] aspect-square flex items-center rounded-lg justify-center overflow-visible">
          <img
            className="w-full h-full rounded-3xl border-2 border-primary"
            src={artist?.photo}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
