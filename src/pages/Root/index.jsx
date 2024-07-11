import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import styles from "../../style";
import Footer from "../../components/Footer";
const Root = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Root;
