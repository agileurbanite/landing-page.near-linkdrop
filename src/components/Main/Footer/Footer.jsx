import React from "react";
import Twitter from "../../../images/twitter.png";
import Telegram from "../../../images/telegram.png";
import Github from "../../../images/github.png";
import * as footerStyle from "./Footer.module.css";

export const Footer = () => (
  <div className={footerStyle.container}>
    <div className={footerStyle.footerLinks}>
      ©2021 NEARDROP
    </div>
    <div className={footerStyle.socialIcons}>
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
);
