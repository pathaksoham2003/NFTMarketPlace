import React, { useEffect, useState } from "react";
import { User } from "../../assets";
import Banner from "./Banner";
import ArtistInfo from "./ArtistInfo";
import ButtonGroup from "./ArtistInfo/ButtonGroup";
import TabBar from "./TabBar";
import { useParams } from "react-router-dom";
import { TopCreators } from "../../constants";

const ArtistProfile = () => {
  const {id} = useParams();
  const [artist,setArtist] = useState(null);
  useEffect(()=>{
    const data = TopCreators.filter(item=>item.id===parseInt(id));
    setArtist(data[0])
  },[])
  return (
    <section className="flex flex-col lg:px-24 ">
      <Banner artist={artist}/>
      <div className="px-4 md:px-20 mt-24 flex justify-between">
        <ArtistInfo artist={artist}/>
        <ButtonGroup />
      </div>
      <TabBar id={id} creator={artist}/>
    </section>
  );
};

export default ArtistProfile;
