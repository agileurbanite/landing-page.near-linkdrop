import React from "react";
import * as distributeStyles from "./Distribute.module.css";
import { StaticImage } from "gatsby-plugin-image";
import * as appStyles from "../../App.module.css";
import * as mainStyle from "../Main.module.css";

export const Distribute = () => (
  <div className={mainStyle.bannerContainer}>
    <div className={distributeStyles.leftBlock}>
      <div className={distributeStyles.banner}>
        <StaticImage
          src="../../../images/Distribute.png"
          alt="Connect Wallet"
          placeholder="dominantColor"
          quality={90}
        />
      </div>
    </div>
    <div className={distributeStyles.rightBlock}>
      <div className={appStyles.linkApp}>STEP 3</div>
      <div className={appStyles.bannerTitle}>Distribute</div>
      <div className={appStyles.bannerSubTitle}>
        Copy each link or export all as CSV or QR codes
      </div>
      <div className={appStyles.moreLink}>
        <a href="https://wiki.near.org/resources/faq/onboarding-with-linkdrop">Learn more ></a>
      </div>
    </div>
  </div>
);
