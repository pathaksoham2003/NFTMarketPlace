import React from "react";
import styles from "../../../style";
import { Rocket } from "../../../assets";
import { Link } from "react-router-dom";
import Category from "./Category";

const BrowseCategories = () => {
  return (
    <div className="flex-col px-0 md:px-24 py-[20px] sm:py-[40px] md:py-[60px]">
      <div className="py-4 mt-4 flex justify-between">
          <h2 className={styles.heading2}>Browse Categories</h2>
      </div>
      <div className="grid gap-2 sm:gap-4 grid-cols-2 md:gap-4 sm:grid-cols-4">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default BrowseCategories;
