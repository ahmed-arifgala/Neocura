import React from "react";
import classes from './IndivDocMainSec.module.css';
import LeftSideSec from "./LeftSideSec/LeftSideSec";
import RightSideSec from "./RightSideSec/RightSideSec";

const IndivDocMainSec = () => {
    return(
        <div className={classes.IndivDocMainSec}>
            <LeftSideSec />
            <div className={classes.RightSideSec}>
                <RightSideSec />
            </div>
            
        </div>
        
    );
}

export default IndivDocMainSec;