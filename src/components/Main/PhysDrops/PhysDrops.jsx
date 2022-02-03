import React from "react";
import * as physDropsStyles from "./PhysDrops.module.css";
import { StaticImage } from "gatsby-plugin-image";
import * as appStyles from "../../App.module.css";
import {LearnMore} from "../general/LearnMore/LearnMore";

export const PhysDrops = () => (
  <div className={physDropsStyles.container}>
    <div className={physDropsStyles.leftBlock}>
      <div className={physDropsStyles.banner}>
        <StaticImage
          src="../../../images/nearconn.png"
          alt="Physical drops"
          quality={95}
          loading="eager"
          fadeIn={false}
          formats={["auto", "webp", "avif"]}
        />
      </div>
    </div>
    <div className={physDropsStyles.rightBlock}>
        <div className={physDropsStyles.innerBgOval}/>
        <div className={appStyles.linkApp}>USECASE #1</div>
      <div className={appStyles.bannerTitle}>Physical drops</div>
      <div className={appStyles.bannerSubTitle}>
        At NEARCON Alpha we onboared all participants via printed QR codes{" "}
      </div>
      <LearnMore />
    </div>
  </div>
);
