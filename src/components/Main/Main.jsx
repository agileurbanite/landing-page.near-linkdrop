import React from "react";
import { TopNav } from "./TopNav/TopNav";
import { ConnectWallet } from "./ConnectWallet/ConnectWallet";
import { Generate } from "./Generate/Generate";
import { Distribute } from "./Distribute/Distribute";
import { Claim } from "./Claim/Claim";
import { PhysDrops } from "./PhysDrops/PhysDrops";
import { TwitterInt } from "./TwitterInt/TwitterInt";
import { Partners } from "./Partners/Partners";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import * as appStyles from "../App.module.css";

export const Main = () => (
  <>
    <TopNav />
    <div className={appStyles.contentContainer}>
      <Header />
      <ConnectWallet />
      <Generate />
      <Distribute />
      <Claim />
      <PhysDrops />
      <TwitterInt />
      <Partners />
      <Footer />
    </div>
  </>
);
