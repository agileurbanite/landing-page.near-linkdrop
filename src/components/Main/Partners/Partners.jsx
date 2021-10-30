import React from "react";
import * as partnersStyles from "./Partners.module.css"
import {StaticImage} from "gatsby-plugin-image";
import * as appStyles from "../../App.module.css";

export const Partners = () => {
    return (
        <>
            <div className={partnersStyles.container}>
                <div className={partnersStyles.banner1}>
                    <StaticImage src="../../../images/nearweek.png" alt="Connect Wallet" placeholder="dominantColor" quality={90} />
                </div>
                <div className={partnersStyles.banner2}>
                    <StaticImage src="../../../images/blocknear.png" alt="Connect Wallet" placeholder="dominantColor" quality={90} />
                </div>
                <div className={partnersStyles.banner3}>
                    <StaticImage src="../../../images/swaggerdao.png" alt="Connect Wallet" placeholder="dominantColor" quality={90} />
                </div>
                <div className={partnersStyles.banner4}>
                    <StaticImage src="../../../images/human.png" alt="Connect Wallet" placeholder="dominantColor" quality={90} />
                </div>
                <div className={partnersStyles.banner5}>
                    <StaticImage src="../../../images/octopus.png" alt="Connect Wallet" placeholder="dominantColor" quality={90} />
                </div>
                <div className={partnersStyles.banner6}>
                    <StaticImage src="../../../images/paras.png" alt="Paras" placeholder="dominantColor" quality={90} />
                </div>
                <div className={partnersStyles.banner7}>
                    <StaticImage src="../../../images/reffinance.png" alt="Paras" placeholder="dominantColor" quality={90} />
                </div>
                <div className={partnersStyles.banner8}>
                    <StaticImage src="../../../images/mintbase.png" alt="Paras" placeholder="dominantColor" quality={90} />
                </div>
            </div>
        </>
    );
};
