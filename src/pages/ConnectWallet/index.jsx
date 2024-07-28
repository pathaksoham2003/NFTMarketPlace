import styles, { layout } from "../../style";
import Button from "./Button";
import SpaceShip from "../../images/SpaceShip.png?react"
const features = [
  { icon: "and", title: "Helllo", content: "ndsnsnd", index: 0 },
];

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const ConnectWallet = () => (
  <div className={`bg-primary ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <section id="features" className="flex flex-col sm:flex-row h-auto">
        <div
          className={`${layout.sectionInfo} object-contain h-[232px] sm:h-auto`}
        >
          <img src={SpaceShip} />
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default ConnectWallet;
