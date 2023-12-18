import React from "react";
import DocCard from "./DocCard/DocCard";
import classes from './IndivDoc.module.css';
import IndivDocMainSec from "./IndivDocMainSec/IndivDocMainSec";

const IndivDoc = () => {
    return(
        <div className={classes.IndivDoc}>
            <DocCard />
            <IndivDocMainSec />
        </div>
        
    );
}

export default IndivDoc;