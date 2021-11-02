import React from "react";
import Twitter from "../../../images/twitter.png";
import Telegram from "../../../images/telegram.png";
import Github from "../../../images/github.png";
import * as footerStyle from './Footer.module.css';

export const Footer = () => {
    return (
        <>
            <div className={footerStyle.container}>
               <div className={footerStyle.footerLinks}>
                   ©2021 Linkdrop | Terms | Privacy | Licenses | Imprint | Cookie Policy - Preferences | v2.17.0
               </div>
                <div className={footerStyle.socialIcons}>
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
        </>
    );
};
