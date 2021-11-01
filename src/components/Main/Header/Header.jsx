import Smile from "../../../images/smile.png";
import Twitter from "../../../images/twitter.png";
import Telegram from "../../../images/telegram.png";
import Github from "../../../images/github.png";
import { StaticImage } from "gatsby-plugin-image";
import * as appStyles from "../../App.module.css";
import * as headerStyle from "./Header.module.css";
import * as mainStyles from "./../Main.module.css";

import React from "react";

export const Header = () => (
  <div className={mainStyles.bannerContainer}>
    <div className={headerStyle.leftBlock}>
      <div className={headerStyle.blockContent}>
        <div className={headerStyle.blockTopText}>
          <img src={Smile} alt="Linkdrop" /> Linkdrop mass generation tool
        </div>
        <div className={appStyles.bannerTitle}>Onboard new users</div>
        <div className={headerStyle.subtitle}>
          Setup a Linkdrop Campain with claimable links & QR code
        </div>
        <div className={headerStyle.buttonBlock}>
          <a href="/" className={headerStyle.button}>
            Get started
          </a>
        </div>
        <div className={headerStyle.blockSocialIcons}>
          <div className={headerStyle.icons}>
            <a href="#">
              <img src={Twitter} alt="Linkdrop twitter" />
            </a>
            <a href="#">
              <img src={Telegram} alt="Linkdrop telegram" />
            </a>
            <a href="#">
              <img src={Github} alt="Linkdrop github" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={headerStyle.rightBlock}>
      <StaticImage
        src="../../../images/headerbanner.png"
        quality={95}
        loading="eager"
        fadeIn={false}
        formats={["auto", "webp", "avif"]}
        alt="Header banner"
      />
    </div>
  </div>
);
