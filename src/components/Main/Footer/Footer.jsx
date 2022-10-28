import React from "react";
import Github from "../../../images/github.png";
import * as footerStyle from "./Footer.module.css";
import { GITHUB_URL } from "../../../utils/constants";

export const Footer = () => (
  <div className={footerStyle.container}>
    <div className={footerStyle.footerLinks}>
      ©2021 NEARDROP
    </div>
    <div className={footerStyle.socialIcons}>
        <a target="_blank" href={GITHUB_URL}>
            <img src={Github} alt="NEARDROP github" />
        </a>
    </div>
  </div>
);
