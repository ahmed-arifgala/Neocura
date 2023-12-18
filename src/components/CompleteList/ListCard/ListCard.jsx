import React from "react";
import classes from './ListCard.module.css';

const ListCard = (props) => {
    return (
        <div>
            <div className={classes.Parent}>
                <div className={classes.Card}>

                    <div className={classes.ContentBox}>

                        <span className={classes.CardTitle}>{props.heading}</span>
                        <p className={classes.CardContent} >{props.para} Doctors Available </p>
                        <button className={classes.ViewButton} onClick={() => props.scroll(props.heading)}><a>View Doctors</a></button> 
                        
                    </div>
            
                    
                </div>
            </div>
        </div>
    )
}

export default ListCard;