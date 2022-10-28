import React from "react";
import * as linkStyles from "./LearnMore.module.css";
import { LEARN_MORE_URL } from "../../../../utils/constants";

export const LearnMore = () => (
    <div className={linkStyles.moreLink}>
        <a target="_blank" href={LEARN_MORE_URL}>Learn more ></a>
    </div>
)
