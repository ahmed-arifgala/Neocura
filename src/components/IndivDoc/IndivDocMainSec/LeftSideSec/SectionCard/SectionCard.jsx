import React from "react";
import Tag from "./Tag/Tag";
import classes from './SectionCard.module.css';

const SectionCard = (props) => {
    return (
        <div className={classes.SectionCard}>
            <div><h1>{props.heading}</h1></div>
            <div className={classes.listItems}>
                <ul>
                    {props.data
                        .map(
                            (ele, i) => <li key={i}><Tag text={ele}/></li>
                        )}   
                </ul>
            </div>
        </div>
    );
}

export default SectionCard;