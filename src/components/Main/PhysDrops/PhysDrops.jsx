import React from "react";
import * as physDropsStyles from "./PhysDrops.module.css"
import {StaticImage} from "gatsby-plugin-image";
import * as appStyles from "../../App.module.css";

export const PhysDrops = () => {
    return (
        <>
            <div className={physDropsStyles.container}>
                <div className={physDropsStyles.leftBlock}>
                    <div className={physDropsStyles.banner}>
                        <StaticImage src="../../../images/nearconn.png" alt="Connect Wallet" placeholder="dominantColor" quality={90} />
                    </div>
                </div>
                <div className={physDropsStyles.rightBlock}>
                    <div className={appStyles.bannerTitle}>Physical drops</div>
                    <div className={appStyles.bannerSubTitle}>At NEARCON Alpha we onboared all participants via printed QR codes </div>
                    <div className={appStyles.moreLink}>
                        <a href="/">Learn more ></a>
                    </div>
                </div>
            </div>
        </>
    );
};
