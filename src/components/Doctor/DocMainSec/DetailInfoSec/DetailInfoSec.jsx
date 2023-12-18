import React from "react";
import DetailInfo from "./DetailInfo/DetailInfo";
import classes from './DetailInfoSec.module.css';

const DetailInfoSec = ({Q, A}) => {

    return(
        <div className={classes.DetailInfoSec}>
        {
            Q.map((que, index) => {
                {console.log('QUE' ,  que, A[index])};
                return <DetailInfo key={index} question = {que} answer={A[index]} index={index}/>
            })
        }
        </div>
    );
}

export default DetailInfoSec;