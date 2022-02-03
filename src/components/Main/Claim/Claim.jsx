import React from "react";
import * as claimStyles from "./Claim.module.css";
import * as appStyles from "../../App.module.css";
import * as mainStyle from "../Main.module.css";
import ClaimIcon from "../../../images/Сlaim.png";
import {LearnMore} from "../general/LearnMore/LearnMore";

export const Claim = () => (
  <div className={mainStyle.bannerContainer}>
    <div className={claimStyles.leftBlock}>
      <div className={claimStyles.innerBgOval} />
      <div className={appStyles.linkApp}>STEP 4</div>
      <div className={appStyles.bannerTitle}>Claim</div>
      <div className={appStyles.bannerSubTitle}>
        The receiver does not need to have a NEAR wallet in advance
      </div>
      <LearnMore />
      <div className={claimStyles.innerBgOval7} />
    </div>
    <div className={claimStyles.rightBlock}>
      <div className={claimStyles.banner}>
          <img src={ClaimIcon} alt="Connect Wallet" />
      </div>
      <div className={claimStyles.innerBgOval6}/>
      <div className={claimStyles.innerBgOval8}/>
    </div>
  </div>
);

