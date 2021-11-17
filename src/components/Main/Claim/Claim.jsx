import React from "react";
import * as claimStyles from "./Claim.module.css";
import * as appStyles from "../../App.module.css";
import * as mainStyle from "../Main.module.css";
import {StaticImage} from "gatsby-plugin-image";

export const Claim = () => (
  <div className={mainStyle.bannerContainer}>
    <div className={claimStyles.leftBlock}>
      <div className={claimStyles.innerBgOval} />
      <div className={appStyles.linkApp}>STEP 4</div>
      <div className={appStyles.bannerTitle}>Claim</div>
      <div className={appStyles.bannerSubTitle}>
        The receiver does not need to have a NEAR wallet in advance
      </div>
      <div className={appStyles.moreLink}>
        <a href="https://wiki.near.org/resources/faq/onboarding-with-linkdrop">Learn more ></a>
      </div>
      <div className={claimStyles.innerBgOval7} />
    </div>
    <div className={claimStyles.rightBlock}>
      <div className={claimStyles.banner}>
          <StaticImage
              src="../../../images/claim.png"
              quality={95}
              loading="eager"
              fadeIn={false}
              formats={["auto", "webp", "avif"]}
              alt="Header banner"
          />
      </div>
      <div className={claimStyles.innerBgOval6}/>
      <div className={claimStyles.innerBgOval8}/>
    </div>
  </div>
);

