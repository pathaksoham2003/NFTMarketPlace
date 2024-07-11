import React from "react";
import { Link } from "react-router-dom";
import { Rocket } from "../../assets";
import styles, { layout } from "../../style";
import NewGalaxy from "../../images/NewGalaxy.png?react";
// https://s3-alpha-sig.figma.com/img/0b34/7e10/5d353eae4c7b063b0da73eddb78c3a89?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLKrZiBmMYYPJ30xJekQJiFr17W4k6WTyAei7i5ZisnVmo4fGd4Tegw6ucLY08WSthT0LOKRSmYYobCAx~D4JU3UO9k~uqeeKavnMbzj2kDWC4IymIxx9pt0F8a-TvB2M6e4WnOKzixzquPNvN0gSjANW1kstuBfeIdBdXIv9IdKV3RzuC~Qc7ynSHfvimDNdcEGJMhvQ91M3alos7~0oMoROrbM3NBHaSdzdynokiv03pJV~8u1Ajl-fGgNiDo4hOUkZoa7~UoF4R3RjVBaD0nSFlCAfBFlI4V~s889g-F1-XKqLQTITTy8Z5x20FcyN9txIkGXvDmkXQCqzjApxw__
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

          <div className={`${layout.sectionInfo} flex-col ml-10 md:ml-20`}>
            <h2 className="text-5xl text-white py-4 font-semibold">Create Account</h2>
            <p className="text-[22px] text-white md:max-w-[460px]">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
            <div class="relative my-2 md:max-w-[330px] w-full mt-10">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border text-gray-900 text-sm rounded-full block w-full ps-10 p-3 "
                placeholder="name@flowbite.com"
              />
            </div>
            <div class="relative my-2 md:max-w-[330px] w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border text-gray-900 text-sm rounded-full block w-full ps-10 p-3 "
                placeholder="name@flowbite.com"
              />
            </div>
            <div class="relative my-2 md:max-w-[330px] w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border text-gray-900 text-sm rounded-full block w-full ps-10 p-3 "
                placeholder="name@flowbite.com"
              />
            </div>
            <div class="relative my-2 md:max-w-[330px] w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border text-gray-900 text-sm rounded-full block w-full ps-10 p-3 "
                placeholder="name@flowbite.com"
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
