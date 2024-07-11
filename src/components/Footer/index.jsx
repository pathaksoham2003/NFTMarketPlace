import React from "react";
import styles from "../../style";
import { User, logo } from "../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={`bg-lightGrey ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} justify-items-center`}>
        <div className="h-auto flex justify-between lg:px-24 px-2 md:flex-row flex-col pt-10 mb-10">
          <div className="flex flex-col">
            <img src={logo} alt="hoobank" className="w-[250px] h-[32px] mb-4" />
            <h2 className="text-textGrey py-1 max-w-[238px] pl-2">
              NFT marketplace UI created with Anima for Figma.
            </h2>
            <h2 className="text-textGrey py-1 pl-2 pt-1">Join our community</h2>
            <div className="flex">
              <img src={User} alt="hoobank" className="w-[20px] h-[25px] m-2" />
              <img src={User} alt="hoobank" className="w-[20px] h-[25px] m-2" />
              <img src={User} alt="hoobank" className="w-[20px] h-[25px] m-2" />
              <img src={User} alt="hoobank" className="w-[20px] h-[25px] m-2" />
            </div>
          </div>
          <div className="flex flex-col justify-between mb-4">
            <h2 className="text-[22px] text-white font-semibold">Explore</h2>
            <h2 className="text-textGrey text-[16px]">Marketplace</h2>
            <h2 className="text-textGrey text-[16px]">Rankings</h2>
            <h2 className="text-textGrey text-[16px]">Connect a wallet</h2>
          </div>
          <div className="flex-col">
            <h2 className="text-[22px] md:max-w-[400px] pb-5 font-semibold leading-[35.2px] text-white">
              Join Our Weekly Digest
            </h2>
            <h2 className="text-[16px] md:max-w-[450px] font-normal leading-[22.4px] text-textGrey">
              Get exclusive promotions & updates straight to your inbox.
            </h2>
            <div className="hidden sm:flex mt-10 rounded-3xl w-full max-w-[420px] justify-between bg-white">
              <input
                className="px-6 text-xl text-grey rounded-l-3xl"
                placeholder="Enter your email here"
              />
              <Link className="bg-secondary p-5 px-10 rounded-3xl text-white font-semibold text-[16px] flex">
                <img
                  src={User}
                  alt="hoobank"
                  className="w-[20px] h-[25px] mr-2"
                />
                Subscribe
              </Link>
            </div>
            <div className="flex sm:hidden flex-col mt-2">
              <input
                className="w-full text-xl pl-5 text-grey rounded-3xl p-3
                my-4"
                placeholder="Enter your email here"
              />
              <Link className="bg-secondary p-3 rounded-3xl justify-center text-white font-bold text-[22px] flex">
                <img src={User} alt="hoobank" className="mt-1 h-[30px] mr-4" />
                Subscribe
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[1px] my-4 bg-textGrey mx-24" />
        <div className="flex flex-1 justify-between mx-24">
          <h2 className="my-4 text-textGrey pb-4 mb-5">
            Ⓒ Copyrights to this site are reserved and protected by WalkUp |
            MapX.
          </h2>
          <h2 className="my-4 text-textGrey  pb-4 mb-5">
            Developed by Soham Pathak. pathaksoham2003@gmail.com
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
