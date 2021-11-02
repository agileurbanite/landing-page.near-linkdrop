import React from "react";
import * as claimStyles from "./Claim.module.css";
import { StaticImage } from "gatsby-plugin-image";
import ClaimIcon from "../../../images/Claim.png";
import * as appStyles from "../../App.module.css";
import * as mainStyle from "../Main.module.css";

export const Claim = () => (
  <div className={mainStyle.bannerContainer}>
    <div className={claimStyles.leftBlock}>
      <div className={claimStyles.innerBgOval}></div>
      <div className={appStyles.linkApp}>ABOUT APP</div>
      <div className={appStyles.bannerTitle}>Claim</div>
      <div className={appStyles.bannerSubTitle}>
        The receiver does not need to have a NEAR wallet in advance
      </div>
      <div className={appStyles.moreLink}>
        <a href="/">Learn more ></a>
      </div>
      <div className={claimStyles.innerBgOval7}></div>
    </div>
    <div className={claimStyles.rightBlock}>
      <div className={claimStyles.banner}>
        <img src={ClaimIcon} alt="Claim" />
      </div>
      <div className={claimStyles.innerBgOval6}></div>
      <div className={claimStyles.innerBgOval8}></div>
    </div>
  </div>
);

