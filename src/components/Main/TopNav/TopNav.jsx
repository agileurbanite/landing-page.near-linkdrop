import React from "react";
import * as topNav from "./TopNav.module.css";
import Logo from "../../../images/logo.png";

export const TopNav = () => (
  <div className={topNav.container}>
    <div className={topNav.brandLogo}>
      <div className={topNav.logo}>
        <img src={Logo} alt="NEARDROP" />
      </div>
        NEARDROP
    </div>
    <div className={topNav.rightButton}>
      <a href="https://app.neardrop.io/" className={topNav.btn}>
        Get started
      </a>
    </div>
  </div>
);
