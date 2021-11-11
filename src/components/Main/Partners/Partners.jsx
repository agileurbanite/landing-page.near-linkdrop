import React from "react";
import * as partnersStyles from "./Partners.module.css";
import HumanLogo from "../../../images/human.png";
import NearWeekLogo from "../../../images/nearweek.png";
import NearLogo from "../../../images/partner-near.png";
import SwaggerDaoLogo from "../../../images/swaggerdao.png";
import OctopusLogo from "../../../images/octopus.png";
import ParasLogo from "../../../images/paras.png";
import ReffinanceLogo from "../../../images/reffinance.png";
import MintBaseLogo from "../../../images/mintbase.png";

export const Partners = () => (
  <>
  <div className={partnersStyles.bannerTitle}>
      <h3> Early users </h3>
  </div>
  <div className={partnersStyles.container}>
    <div className={partnersStyles.banner1}>
      <div className={partnersStyles.bannerInner}>
        <div className={partnersStyles.imageOuter}>
          <img src={NearWeekLogo} alt="NearWeek" />
        </div>
      </div>
    </div>
    <div className={partnersStyles.banner2}>
      <div className={partnersStyles.bannerInner}>
        <div className={partnersStyles.imageOuter}>
          <img src={NearLogo} alt="Near" />
        </div>
      </div>
    </div>
    <div className={partnersStyles.banner3}>
      <div className={partnersStyles.bannerInner}>
        <div className={partnersStyles.imageOuter}>
          <img src={SwaggerDaoLogo} alt="SwaggerDAO" />
        </div>
      </div>
    </div>
    <div className={partnersStyles.banner4}>
      <div className={partnersStyles.bannerInner}>
        <div className={partnersStyles.imageOuter}>
          <img src={HumanLogo} alt="Human" />
        </div>
      </div>
    </div>
    <div className={partnersStyles.banner5}>
      <div className={partnersStyles.bannerInner}>
        <div className={partnersStyles.imageOuter}>
          <img src={OctopusLogo} alt="Octopus" />
        </div>
      </div>
    </div>
    <div className={partnersStyles.banner6}>
      <div className={partnersStyles.bannerInner}>
        <div className={partnersStyles.imageOuter}>
          <img src={ParasLogo} alt="Paras" />
        </div>
      </div>
    </div>
    <div className={partnersStyles.banner7}>
      <div className={partnersStyles.bannerInner}>
        <div className={partnersStyles.imageOuter}>
          <img src={ReffinanceLogo} alt="Reffinance" />
        </div>
      </div>
    </div>
    <div className={partnersStyles.banner8}>
      <div className={partnersStyles.bannerInner}>
        <div className={partnersStyles.imageOuter}>
          <img src={MintBaseLogo} alt="MintBase" />
        </div>
      </div>
    </div>
  </div>
  </>
);
