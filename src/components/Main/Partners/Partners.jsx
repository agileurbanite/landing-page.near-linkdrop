import React from "react";
import * as partnersStyles from "./Partners.module.css";
import { StaticImage } from "gatsby-plugin-image";
import * as appStyles from "../../App.module.css";
import HumanLogo from "../../../images/human.png";
import NearWeekLogo from "../../../images/nearweek.png";
import NearLogo from "../../../images/partner-near.png";
import SwaggerDaoLogo from "../../../images/swaggerdao.png";
import OctopusLogo from "../../../images/octopus.png";
import ParasLogo from "../../../images/paras.png";
import ReffinanceLogo from "../../../images/reffinance.png";
import MintBaseLogo from "../../../images/mintbase.png";

export const Partners = () => {
  return (
    <>
      <div className={partnersStyles.container}>
        <div className={partnersStyles.banner1}>
          <img src={NearWeekLogo} alt="NearWeek" />
        </div>
        <div className={partnersStyles.banner2}>
          <img src={NearLogo} alt="Near" />
        </div>
        <div className={partnersStyles.banner3}>
          <img src={SwaggerDaoLogo} alt="SwaggerDAO" />
        </div>
        <div className={partnersStyles.banner4}>
          <img src={HumanLogo} alt="Human" />
        </div>
        <div className={partnersStyles.banner5}>
          <img src={OctopusLogo} alt="Octopus" />
        </div>
        <div className={partnersStyles.banner6}>
          <img src={ParasLogo} alt="Paras" />
        </div>
        <div className={partnersStyles.banner7}>
          <img src={ReffinanceLogo} alt="Reffinance" />
        </div>
        <div className={partnersStyles.banner8}>
          <img src={MintBaseLogo} alt="MintBase" />
        </div>
      </div>
    </>
  );
};
