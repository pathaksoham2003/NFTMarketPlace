import React from "react";
import { Link } from "react-router-dom";
import { Rocket } from "../../../assets";
import SpaceWalking from "../../../images/SpaceWalking.png?react";
import AnimaKid from "../../../images/AnimaKid.png?react";

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row lg:px-24 px-2  h-auto sm:h-[544px] md:h-[704px] py-10 sm:py-[40px] md:py-[50px] ">
      <div className="flex-1 flex-col justify-center items-start relative pr-[30px] text-[67px] h-auto sm:h-[381px] md:h-[544px]">
        <h2 className="font-semibold text-white leading-[73.7px] sm:leading-[45.6px] sm:text-[38px] md:text-[67px] md:leading-[73.7px]">
          Discover <br />
          Digital Art &<br />
          Collect NFTs
        </h2>
        <p className="leading-[35.2px] text-[22px] text-white md:mt-4 font-normal sm:text-[16px] sm:leading-[22.4px] md:text-[22px] md:leading-[35.2px] md:pr-[30px]">
          NFT marketplace created for Amazing Crypto Enthusiasts. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <div
          key={243156}
          className="font-poppins my-10 h-[60px] cursor-pointer text-[16px] bg-secondary mt-6 px-5 py-2.5 w-full sm:w-56 rounded-xl flex justify-center"
        >
          <img src={Rocket} alt="hoobank" className="w-[20px]  mr-2" />

          <Link to={"/SignUp"} className="text-white self-center">
            Get Started
          </Link>
        </div>
        <div className="flex justify-between w-full md:pr-14 md:mt-2">
          <div className="flex-1">
            <h3
              className={`text-white text-[22px] leading-[35.2px] font-mono font-bold md:text-[28px]`}
            >
              240k+
            </h3>
            <h2
              className={`text-white text-[16px] leading-[22.4px] md:text-[24px]`}
            >
              Total Sale
            </h2>
          </div>
          <div className="flex-1">
            <h3
              className={`text-white text-[22px]  xs:text-[28px] leading-[35.2px] font-mono font-bold md:text-[28px]`}
            >
              100k+
            </h3>
            <h2
              className={`text-white text-[16px] leading-[22.4px] md:text-[24px]`}
            >
              Auctions
            </h2>
          </div>
          <div className="flex-1">
            <h3
              className={`text-white text-[22px] xs:text-[28px] leading-[35.2px] font-mono font-bold md:text-[28px]`}
            >
              240k+
            </h3>
            <h2
              className={`text-white text-[16px] leading-[22.4px] md:text-[24px]`}
            >
              Artists
            </h2>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center relative h-auto sm:h-[381px] md:h-[544px] pb-[60px]">
        <div className="flex-1 h-full w-full md:px-[30px] md:pr-[100px]">
          <div className="sm:h-4/5 bg-black rounded-t-xl">
            <img
              className={`rounded-t-xl w-full h-full object-fit`}
              src={SpaceWalking}
              alt="Space Walking"
            />
          </div>
          <div className="sm:h-1/5 flex items-start pl-5 justify-center flex-col bg-lightGrey rounded-b-xl flex-1 h-full">
            <h2 className="text-white font-bold text-xl">Space Walking</h2>
            <div className="flex items-center mt-2">
              <img
                src={AnimaKid}
                alt="Author"
                className="w-6 h-6 rounded-full mr-2"
              />
              <span className="text-white">Animakid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section id="features" className={`${layout.section} px-0 md:px-14`}>
    //   <div className={`${layout.sectionInfo} h-[544px]`}>
    //     <h2 className="font-poppins font-semibold xs:text-[67px] text-[40px] text-white xs:leading-[56.8px] leading-[66.8px] w-full">
    //       Discover <br className="sm:block hidden" /> Digital Art &{" "}
    //       <br className="md:block hidden" /> Collect NFTs
    //     </h2>
    //     <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
    //       NFT marketplace UI created with Anima for Figma. Collect, buy and sell
    //       art from more than 20k NFT artists.
    //     </p>

    //     <div
    //       key={243156}
    //       className="font-poppins my-4 h-[60px] cursor-pointer text-[16px] bg-secondary mt-6 px-5 py-2.5 w-full sm:w-56 rounded-xl flex justify-center"
    //     >
    //       <img src={Rocket} alt="hoobank" className="w-[20px]  mr-2" />

    //       <Link to={"/SignUp"} className="text-white self-center">
    //         Get Started
    //       </Link>
    //     </div>
    //     <div className="flex justify-between w-full">
    //       <div className="">
    //         <h3
    //           className={`text-white text-[22px]  xs:text-[28px] font-mono font-bold`}
    //         >
    //           240k+
    //         </h3>
    //         <h2 className={`text-lightGrey text-[16px] xs:text-[24px]`}>
    //           Total Sale
    //         </h2>
    //       </div>
    //       <div className="">
    //         <h3
    //           className={`text-white text-[22px]  xs:text-[28px] font-mono font-bold`}
    //         >
    //           100k+
    //         </h3>
    //         <h2 className={`text-lightGrey text-[16px] xs:text-[24px]`}>
    //           Auctions
    //         </h2>
    //       </div>
    //       <div className="">
    //         <h3
    //           className={`text-white text-[22px]  xs:text-[28px] font-mono font-bold`}
    //         >
    //           240k+
    //         </h3>
    //         <h2 className={`text-lightGrey text-[16px] xs:text-[24px]`}>
    //           Artists
    //         </h2>
    //       </div>
    //     </div>
    //   </div>

    //   <div
    //     className={`${layout.sectionImg} flex-col max-w-90 h-[330px] bg-primary rounded-xl overflow-hidden`}
    //   >
    //     <div className="w-full max-h-80 overflow-hidden">
    //       <img
    //         className={`rounded-t-xl w-full h-full object-fit`}
    //         src="https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Euj9mfGtsiSpDywOSUnJsmikd9K7LN2TgZmZAdARIb2U6P6fKGXUCk8iROOZeUe9E8ZDBAIxiLx67yJPHgw1ez2-A5bQNSnrSe~vMypJOlBOvloIDPnC-HWGT0Bcw~8CDmGBHuM7m0exB99ACPrE4rE7l71~WemzPXec0y9kv2b5zUQRqIJETDDXDjC2Ez0as9FZkRhXHIJiXPyv213ZVUBZIXowCk1e5-baIS9HqzV~n870OCIkvPQpFBkeczXjKF68c9OvpdEhh3Ngt1W4qgdhoxZ-BuHBqlTPxO9a7~N5sGsD47Y5hI~eONFA6H6JAVQgZosVlvDV3za4L4QlCQ__"
    //         alt="Space Walking"
    //       />
    //     </div>
    //     <div
    //       className={`p-4 bg-lightGrey w-full rounded-b-xl flex flex-col items-start`}
    //     >
    //       <h2 className="text-white font-bold text-xl">Space Walking</h2>
    //       <div className="flex items-center mt-2">
    //         <img
    //           src="/mnt/data/image.png"
    //           alt="Author"
    //           className="w-6 h-6 rounded-full mr-2"
    //         />
    //         <span className="text-white">Animakid</span>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;
