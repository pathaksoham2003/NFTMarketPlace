import React from "react";
import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import NewGalaxy from "../../images/NewGalaxy.png?react";
import { EnvelopeSimple, LockKey, User } from "../../icons";

const SignUp = () => {
  return (
    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section id="features" className="flex flex-col sm:flex-row h-auto">
          <div
            className={`${layout.sectionInfo} object-contain h-[232px] sm:h-auto`}
          >
            <img src={NewGalaxy} />
          </div>

          <div className={`flex flex-1 flex-col py-10 md:ml-16 pl-10 ml-0 md:mt-0`}>
            <h2 className="text-5xl text-white py-5 font-semibold">
              Create Account
            </h2>
            <p className="text-[22px] text-white md:max-w-[460px]">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
            <div class="relative my-2 md:max-w-[330px] w-full mt-10">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img src={User} />
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border font-semibold focus:outline-none text-lg text-gray-900 rounded-full block w-full ps-10 p-3 "
                placeholder="Username"
              />
            </div>
            <div class="relative my-2 md:max-w-[330px] w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img src={EnvelopeSimple} />
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border font-semibold focus:outline-none text-lg text-gray-900 rounded-full block w-full ps-10 p-3 "
                placeholder="Email"
              />
            </div>
            <div class="relative my-2 md:max-w-[330px] w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img src={LockKey} />
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border font-semibold focus:outline-none text-lg text-gray-900 rounded-full block w-full ps-10 p-3 "
                placeholder="Password"
              />
            </div>
            <div class="relative my-2 md:max-w-[330px] w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img src={LockKey} />
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border font-semibold focus:outline-none text-lg text-gray-900 rounded-full block w-full ps-10 p-3 "
                placeholder="Confirm Password"
              />
            </div>
            <div
              key={243156}
              className="font-poppins cursor-pointer text-[16px] bg-secondary mt-5 justify-center py-2.5 rounded-full flex w-full md:max-w-[320px]"
            >
              <Link to={"/SignUp"} className="text-white font-semibold">
                Create Account
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
