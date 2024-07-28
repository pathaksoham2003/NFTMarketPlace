import styles from "../../style";
import BrowseCategories from "./BrowseCategories";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import JoinDigest from "./JoinDigest";
import DiscoverNFT from "./DiscoverNFT";
import TopCreator from "./TopCreators";
import TrendingCollections from "./TrendingCollections";
import { Mushroom } from "../../images/images";

const Home = () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth} justify-items-center`}>
     <Hero/>
     <TrendingCollections/>
     <TopCreator/>
     <BrowseCategories/>
     <DiscoverNFT/>
     {/* Image of Mushroom */}
     <div className="sm:h-[630px] md:h-[660px] w-full bg-gradient-to-t from-[#cb72f8] overflow-hidden h-[590px]">
     <img className="object-cover object-center w-full h-full mix-blend-overlay" src={Mushroom} />
     </div>
     <HowItWorks/>
     <JoinDigest/>
    </div>
  </div>
);

export default Home;
