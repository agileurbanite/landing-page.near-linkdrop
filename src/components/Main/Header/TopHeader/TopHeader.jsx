import * as topHeaderStyles from "./TopHeader.module.css";
import * as appStyles from "../../../App.module.css";
import React from "react";
import Logo from "../../../../images/logo.png";

export const TopHeader = () => {
    return (
        <div className={topHeaderStyles.container}>
            <div className={topHeaderStyles.brandLogo}>
                <div className={topHeaderStyles.logo}>
                    <img src={Logo} alt="Linkdrop" />
                </div>
                Linkdrop
            </div>
            <div className={topHeaderStyles.rightButton}>
                <a href="/" className={appStyles.btn}>
                    Get started
                </a>
            </div>
        </div>
    );
};
