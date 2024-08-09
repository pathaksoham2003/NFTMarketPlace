import styles, { layout } from "../../style";
import SpaceShip from "../../images/SpaceShip.png?react";
import { Coinbase, MetaMask, WalletConnect } from "../../icons";

const ConnectWallet = () => (
  <div className={`bg-primary ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <section id="features" className="flex flex-col sm:flex-row h-auto">
        <div
          className={`${layout.sectionInfo} object-contain h-[232px] sm:h-auto`}
        >
          <img src={SpaceShip} />
        </div>

        <div
          className={`flex flex-1 flex-col py-10 md:ml-16 pl-10 ml-0 md:mt-0`}
        >
          <h2 className="text-5xl text-white py-5 font-semibold">
            Connect Wallet
          </h2>
          <h2 className="text-xl text-white">
            Choose a wallet you want to connect.
          </h2>
          <h2 className="text-xl text-white mb-8">
            There are several wallet providers.
          </h2>
          <div className="flex w-full max-w-[350px] items-center bg-purple-800/15 border-2 rounded-3xl border-secondary py-5 my-2 px-10">
            <img src={MetaMask} />
            <h2 className="text-xl text-white pl-5">Metamask</h2>
          </div>
          <div className="flex w-full max-w-[350px] items-center bg-purple-800/15 border-2 rounded-3xl border-secondary py-5 my-2 px-10">
            <img src={WalletConnect} />
            <h2 className="text-xl text-white pl-5">WalletConnect</h2>
          </div>
          <div className="flex w-full max-w-[350px] items-center bg-purple-800/15 border-2 rounded-3xl border-secondary py-5 my-2 px-10">
            <img src={Coinbase} />
            <h2 className="text-xl text-white pl-5">Coinbase</h2>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default ConnectWallet;
