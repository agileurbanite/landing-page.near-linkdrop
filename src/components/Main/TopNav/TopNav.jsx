import * as topNav from "./TopNav.module.css";
import Logo from "../../../images/logo.png";
import React from "react";

export const TopNav = () => {
    return (
        <div className={topNav.container}>
            <div className={topNav.brandLogo}>
                <div className={topNav.logo}>
                    <img src={Logo} alt="Linkdrop" />
                </div>
                Linkdrop
            </div>
            <div className={topNav.rightButton}>
                <a href="/" className={topNav.btn}>
                    Get started
                </a>
            </div>
        </div>
    );
};
