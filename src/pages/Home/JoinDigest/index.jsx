import React from "react";
import styles from "../../../style";
import { Link } from "react-router-dom";
import { User } from "../../../assets";
import Astronaut from "../../../images/Astronaut.png?react"
const JoinDigest = () => {
  return (
    <div className="w-full md:px-24 mx-2 mb-24">
      <div className="w-full sm:bg-lightGrey flex flex-col sm:flex-row p-0 sm:p-4 md:p-16 rounded-3xl">
        <div className="sm:w-1/2 w-full h-[310px] overflow-hidden md:mr-20 sm:mr-5 rounded-3xl">
          <img
            className="w-full h-full object-cover object-center"
            src={Astronaut}
          />
        </div>
        <div className="sm:w-1/2 w-full flex-col">
          <h2 className="text-[38px] md:max-w-[400px] py-5 font-semibold leading-[45.6px] text-white">
            Join Our Weekly Digest
          </h2>
          <h2 className="text-[22px] md:max-w-[450px] font-normal leading-[35.2px] text-white">
            Get exclusive promotions & updates straight to your inbox.
          </h2>
          <div className="hidden sm:flex sm:mt-2 md:mt-10 rounded-3xl w-full max-w-[420px] justify-between bg-white">
            <input
              className="px-6 text-xl w-full text-grey rounded-l-3xl"
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
    </div>
  );
};

export default JoinDigest;
