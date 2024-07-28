import React from "react";
import styles from "../../../style";
import { Link } from "react-router-dom";
import { Rocket } from "../../../assets";
import NFTs from "./NFTs";
import { DiscoverMoreNFTs } from "../../../constants";

const DiscoverNFT = () => {
  return (
    <div className="flex-col px-0 md:px-24 py-[20px] sm:py-[40px] md:py-[60px]">
      <div className="py-3 mb-5 flex justify-between">
        <div className="">
          <h2 className={styles.heading2}>Discover More NFTs</h2>
          <h2 className="text-xl text-dimWhite">Explore new trending NFTs</h2>
        </div>
        <Link
          to={"/SignUp"}
          key={243156}
          className="max-w-64 hidden mx-2 font-poppins justify-center my-4 cursor-pointer text-[16px] border-secondary border-2 mt-6 px-5 py-2.5 w-50 rounded-2xl sm:flex"
        >
          <img src={Rocket} alt="hoobank" className="w-[20px] h-[25px] mr-2" />

          <h2 className="text-white">See All</h2>
        </Link>
      </div>
      <div className="grid gap-2 sm:gap-4 grid-cols-2 md:gap-4 sm:grid-cols-3">
        {DiscoverMoreNFTs.map((item) => (
          <NFTs item={item} />
        ))}
      </div>
    </div>
  );
};

export default DiscoverNFT;
