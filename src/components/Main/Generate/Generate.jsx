import React from "react";
import * as generateStyles from "./Generate.module.css";
import { StaticImage } from "gatsby-plugin-image";
import * as appStyles from "../../App.module.css";
import * as mainStyle from "../Main.module.css";

export const Generate = () => (
  <div className={mainStyle.bannerContainer}>
    <div className={generateStyles.leftBlock}>
      <div className={generateStyles.innerBgOval8}></div>
      <div className={appStyles.linkApp}>ABOUT APP</div>
      <div className={appStyles.bannerTitle}>Generate</div>
      <div className={appStyles.bannerSubTitle}>
        Specify the amount of links & NEAR per link
      </div>
      <div className={appStyles.moreLink}>
        <a href="/">Learn more ></a>
      </div>
    </div>
    <div className={generateStyles.rightBlock}>
      <div className={generateStyles.innerBgOval7}></div>
      <div className={generateStyles.banner}>
        <StaticImage
          src="../../../images/Generate.png"
          alt="Connect Wallet"
          placeholder="dominantColor"
          quality={90}
        />
      </div>
      <div className={generateStyles.innerBgOval}></div>
    </div>
    <div className={generateStyles.innerBgOval6}></div>
  </div>
);
