import React from "react";
import styles from "../../../style";
import Working from "./Working";
import { Link } from "react-router-dom";
import { Rocket } from "../../../assets";
import { HowItWork } from "../../../constants";

const HowItWorks = () => {
  return <div className="flex-col px-0 md:px-24 py-[20px] sm:py-[40px] md:py-[60px]">
  <div className="py-3 flex justify-between">
    <div className="">
      <h2 className={styles.heading2}>How it works</h2>
      <h2 className="text-xl text-dimWhite">
      Find out how to get started
      </h2>
    </div>
  </div>
  <div className="sm:grid gap-2 sm:gap-4 grid-cols-2 md:gap-14 sm:grid-cols-3 flex flex-col">
    {HowItWork.map(item => <Working item={item}/>)}
  </div>
</div>;
};

export default HowItWorks;
