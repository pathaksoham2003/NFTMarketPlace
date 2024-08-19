import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import styles from "../../style";
import Footer from "../../components/Footer";
import { Globe, Google, LinkedIn, Whatsapp } from "../../icons";
import { goLi, goMail, goPh, goPort, goWa } from "../../utils/utilsFunction";
const Root = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div
        className="w-full flex justify-center bg-gradient-to-b from-gray-800
 via-gray-900 to-gray-800"
      >
        <div className="max-w-[380px] flex items-center text-white font-semibold">
          <h2 className="text-xl text-white">Created by Soham Pathak</h2>
          <div className="flex">
            <img src={Google} className="h-4 mx-2" onClick={goMail} />
            <img src={LinkedIn} className="h-4 mx-2" onClick={goLi} />
            <img src={Whatsapp} className="h-4 mx-2" onClick={goWa}/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 mr-2"
              onClick={goPh}
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clip-rule="evenodd"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
              onClick={goPort}
            >
              <path
                fill-rule="evenodd"
                d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
