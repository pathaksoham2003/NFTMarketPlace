import styles from "../../style";
import BrowseCategories from "./BrowseCategories";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import JoinDigest from "./JoinDigest";
import DiscoverNFT from "./DiscoverNFT";
import TopCreator from "./TopCreators";
import TrendingCollections from "./TrendingCollections";

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
     <img className="object-cover object-center w-full h-full mix-blend-overlay" src="https://s3-alpha-sig.figma.com/img/a6f4/3f93/50c73503d13e1fe1a0e3277804ef1192?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lajgcyN~4lClXO5l1mqMHd8HDwL5q5L5NgCHcuIKVamDPjqXU-vykcH4OzE-Whsd3tElg6jdnaBTQxPzDHeJjEimEx5XN8d9wa4Go1vC0oWqo5lq13vRA0YEIGwufpfp2hLBy4cAMArbpgL6FF~t6rMabgrE~tjyB9CGZ4zhrHvEJpw3kFoi5FH0vo6jiRT6nGxWwUtvAYG1dgFduu2QUvX61PDb-2p2yr2MlTUzFHDQkoBsgyLaJo~1NpK7MA7Ht4dEIJ9Q~TzBYM3iCAZqnQxx8hW6rkoBOepZuMWP3RFaXOZ0un9gKpmhHIVDStmNxQjnJSt18IInwsYymiJy8Q__" />
     </div>
     <HowItWorks/>
     <JoinDigest/>
    </div>
  </div>
);

export default Home;
