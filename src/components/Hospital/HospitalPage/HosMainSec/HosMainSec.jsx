import React from "react";
import classes from './HosMainSec.module.css';
import HosLeftSide from "./HosLeftSide/HosLeftSide";
import HosRightSide from "./HosRightSide/HosRightSide";

const HosMainSec = () => {
    return(
        <div className={classes.HosMainSec}>
            <HosLeftSide />
            <div className={classes.RightSide}>
            <HosRightSide />    
            </div>
            
        </div>
        
    );
}

export default HosMainSec;