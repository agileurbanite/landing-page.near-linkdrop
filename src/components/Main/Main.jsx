import React from "react";
import { ConnectWallet } from "./ConnectWallet/ConnectWallet";
import { Generate } from "./Generate/Generate";
import { Distribute } from "./Distribute/Distribute";
import { Claim } from "./Claim/Claim";
import { PhysDrops } from "./PhysDrops/PhysDrops";
import { TwitterInt } from "./TwitterInt/TwitterInt";
import { Partners } from "./Partners/Partners";
import { Header } from "./Header/Header";
import {Footer} from "./Footer/Footer";
export const Main = () => {
  return (
    <>
      <Header />
      <ConnectWallet />
      <Generate />
      <Distribute />
      <Claim />
      <PhysDrops />
      <TwitterInt />
      <Partners />
      <Footer />
    </>
  );
};
