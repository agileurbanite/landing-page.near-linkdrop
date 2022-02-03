import React from "react";
import * as twitStyles from "./TwitterInt.module.css";
import { StaticImage } from "gatsby-plugin-image";
import * as appStyles from "../../App.module.css";
import * as mainStyle from "../Main.module.css";
import {LearnMore} from "../general/LearnMore/LearnMore";

export const TwitterInt = () => (
  <div className={mainStyle.bannerContainer} id="twitt-container">
    <div className={twitStyles.innerBgOval} />
    <div className={twitStyles.innerBgOval7} />
    <div className={twitStyles.leftBlock}>
      <div className={appStyles.linkApp}>USECASE #2</div>
      <div className={appStyles.bannerTitle}>Twitter integration</div>
      <div className={appStyles.bannerSubTitle}>
        Paras & MIntbase are using Linkdrop to run retroactive & semi-automated
        Twitter Campaigns
      </div>
      <LearnMore />
    </div>
    <div className={twitStyles.rightBlock}>
      <div className={twitStyles.banner}>
        <StaticImage
          src="../../../images/twitterint.png"
          alt="Twitter integration"
          placeholder="dominantColor"
          quality={90}
        />
      </div>
    </div>
    <div className={twitStyles.innerBgOvalCop7} />
  </div>
);
