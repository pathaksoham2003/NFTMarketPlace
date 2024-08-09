import React, { useEffect, useState } from "react";
import styles from "../../style";
import { User, logo } from "../../assets/index";
import MoreArtistNFT from "./MoreArtistNFT";
import { AnimaKid, Obsidian } from "../../images/images";
import { useParams } from "react-router-dom";
import { NFTData, TopCreators } from "../../constants";

const NFTProfile = () => {
  const { id } = useParams();
  const [nft, setNFT] = useState(null);
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const data = NFTData.filter((item) => item.id == id);
    setNFT(data[0]);
  }, [id]);

  useEffect(() => {
    if (nft) {
      const creatorData = TopCreators.filter((item) => item.id == nft.creator);
      setCreator(creatorData[0]);
    }
  }, [nft]);

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} justify-items-center`}>
        <div className="sm:h-[420px] md:h-[560px] w-full overflow-hidden h-[320px]">
          <img
            className="object-cover object-center w-full h-full"
            src={nft?.image}
          />
        </div>
        <div className="flex flex-1 flex-col justify-between sm:flex-row mt-10 md:mx-24">
          <div className="flex flex-1 flex-col max-w-[605px]">
            <div className="mb-10">
              <h2 className="text-[28px] sm:text-[38px] md:text-[51px] text-white font-semibold">
                {nft?.title}
              </h2>
              <h2 className="text-[16px] md:text-[22px] text-dimWhite font-thin">
                Minted on {nft?.mintedOn}
              </h2>
            </div>
            <div className="mb-8">
              <h2 className="text-[16px] md:text-[22px] text-dimWhite font-semibold">
                Created by
              </h2>
              <div className="flex items-center mt-2">
                <img
                  src={creator?.photo}
                  alt="Author"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-white font-semibold text-[16px] md:text-[22px]">
                  {creator?.name}
                </span>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[22px] text-dimWhite font-semibold mb-3">
              Description
            </h2>
            <p className="text-[16px] md:text-[22px] text-white">
              {nft?.description}
            </p>
            <div className="mt-10">
              <h2 className="text-[16px] md:text-[22px] text-dimWhite font-semibold mb-3">
                Details
              </h2>
              <div className="flex">
                <img src={User} />
                <h2 className="text-white text-[16px] sm:text-[22px] ml-3">
                  View on Etherscan
                </h2>
              </div>
              <div className="flex">
                <img src={User} />
                <h2 className="text-white text-[16px] sm:text-[22px] ml-3">
                  View Original
                </h2>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-[16px] md:text-[22px] text-dimWhite font-semibold mb-3">
                Tags
              </h2>
              <div className="flex flex-col w-full md:flex-row justify-between">
                {nft?.tags.map((item) => (
                  <h2 key={item} className="py-2 mx-1 my-1 w-fit text-white font-semibold bg-lightGrey rounded-2xl px-10">
                    {item}
                  </h2>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex-col sm:w-[295px] p-4 h-[234px] bg-lightGrey rounded-xl">
            <h2 className="text-dimWhite font-light">Auction ends in </h2>
            <div className="flex justify-stretch">
              <div className="flex flex-col flex-1">
                <h2 className="text-[48px] text-white font-bold">59</h2>
                <h2 className="text-dimWhite">Hours</h2>
              </div>
              <div className="text-[44px] px-2 text-white font-bold">:</div>
              <div className="flex flex-col flex-1">
                <h2 className="text-[48px] text-white font-bold">59</h2>
                <h2 className="text-dimWhite">Minutes</h2>
              </div>
              <div className="text-[44px] px-2 text-white font-bold">:</div>
              <div className="flex flex-col flex-1">
                <h2 className="text-[48px] text-white font-bold">59</h2>
                <h2 className="text-dimWhite">Seconds</h2>
              </div>
            </div>
            <div className="w-full mt-2 py-3 flex justify-center bg-secondary rounded-xl text-white font-bold ">
              Place Bid
            </div>
          </div>
        </div>
        <MoreArtistNFT creator={creator} />
      </div>
    </div>
  );
};

export default NFTProfile;
