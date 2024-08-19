import React, { useEffect, useState } from "react";
import styles from "../../style";
import { Link } from "react-router-dom";
import { Rocket } from "../../assets";
import { artistTabView } from "../../utils/content";
import { NFTData } from "../../constants";
import NFTs from "../../components/NFT";

const MoreArtistNFT = ({ creator , id }) => {
  const [creatorNFT, setCreatorNFT] = useState([]);

  useEffect(() => {
    if (creator) {
      const data = NFTData.filter((item) => item.creator == creator.id);
      const some = data.filter((item) => item.id != id);
      setCreatorNFT(some);
    }
  }, [creator,id]);

  return (
    <div className="flex-col px-0 md:px-24 py-[20px] sm:py-[40px] md:py-[60px]">
      <div className="py-3 mb-5 flex justify-between">
        <div className="">
          <h2 className={styles.heading2}>More From This Artist</h2>
        </div>
        <Link
        to={`/artist/${creator?.id}`}
          key={243156}
          className="max-w-64 hidden mx-2 font-poppins justify-center my-4 cursor-pointer text-[16px] border-secondary border-2 mt-6 px-5 py-2.5 w-50 rounded-2xl sm:flex"
        >
          <img src={Rocket} alt="hoobank" className="w-[20px] h-[25px] mr-2" />
          <h2 className="text-white">Go To Artist Page</h2>
        </Link>
      </div>
      <div className="grid gap-2 sm:gap-4 grid-cols-2 md:gap-4 sm:grid-cols-3 mb-4">
        {creatorNFT.map((item) => (
          <NFTs key={item.id} data={item} background="bg-lightGrey"/>
        ))}
      </div>
    </div>
  );
};

export default MoreArtistNFT;
