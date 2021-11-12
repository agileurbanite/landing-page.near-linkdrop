import React from "react";
import Smile from "../../../images/smile.png";
import Twitter from "../../../images/twitter.png";
import Telegram from "../../../images/telegram.png";
import Github from "../../../images/github.png";
import { StaticImage } from "gatsby-plugin-image";
import * as appStyles from "../../App.module.css";
import * as headerStyle from "./Header.module.css";
import * as mainStyles from "./../Main.module.css";

export const Header = () => (
  <div className={mainStyles.bannerContainer}>
    <div className={headerStyle.leftBlock}>
      <div className={headerStyle.leftBlockInner}>
        <div className={headerStyle.blockContent}>
          <div className={headerStyle.blockTopText}>
            <img src={Smile} alt="Linkdrop" /> Linkdrop mass generation tool
          </div>
          <div className={appStyles.bannerTitle}>Onboard new users</div>
          <div className={headerStyle.subtitle}>
            Setup a Linkdrop Campain with claimable links & QR codes
          </div>
          <div className={headerStyle.buttonBlock}>
            <a href="https://app.neardrop.io/" className={headerStyle.button}>
              Get started
            </a>
          </div>
          <div className={headerStyle.blockSocialIcons}>
            <div className={headerStyle.icons}>
              <a href="https://twitter.com/NEARDR0P">
                <img src={Twitter} alt="NEARDROP twitter" />
              </a>
              <a href="https://t.me/joinchat/sPqlT3Zt-mAyNmI0">
                <img src={Telegram} alt="NEARDROP telegram" />
              </a>
              <a href="https://github.com/NEAR-labs/contracts.near-linkdrop">
                <img src={Github} alt="NEARDROP github" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={headerStyle.innerBgOval6}/>
    </div>
    <div className={headerStyle.rightBlock}>
      <div className={headerStyle.rightBlockInner}>
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
    <div className={headerStyle.innerBgOval}/>
  </div>
);
