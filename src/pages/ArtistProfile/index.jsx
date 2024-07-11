import React from "react";
import { User } from "../../assets";
import Banner from "./Banner";
import ArtistInfo from "./ArtistInfo";
import ButtonGroup from "./ArtistInfo/ButtonGroup";
import TabBar from "./TabBar";

const ArtistProfile = () => {
  return (
    <section className="flex flex-col lg:px-24 ">
      <Banner />
      <div className="px-4 md:px-20 mt-24 flex justify-between">
        <ArtistInfo />
        <ButtonGroup />
      </div>
      <TabBar />
    </section>
  );
};

export default ArtistProfile;
