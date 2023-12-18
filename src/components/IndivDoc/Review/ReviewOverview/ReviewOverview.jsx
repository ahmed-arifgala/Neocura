import React from "react";
import classes from './ReviewOverview.module.css';
import star from '../../../../assets/Icons/star.png';
import Button from "../../../../UI/Buttons/SimpleButton/Button";

const ReviewOverview = (props) => {

    const scrollToReview = () => {
        const reviewSec = document.getElementById('review-section');
        reviewSec.scrollIntoView({behavior: 'smooth'});
    }

    console.log(props.overview);

    return (
        <div className={classes.ReviewOverviewSec}>
            <div className={classes.ReviewOverview}>
            
                <div className={classes.Overview}>
                    <ul>
                        {
                            Object.entries(props.overview).map(
                                ([key, value]) => (
                                    <li>{value} <img src={star} /> <span className={classes.Key}>{key}</span></li>
                                )
                                )
                        }
                    </ul>
                </div>
                
                <div className={classes.Satisfaction}>
                    <p>Satisfaction Rate of Patients</p>
                    <div>{props.satisfaction}%</div>
                </div>

            </div>

            <div>
                <Button text='View Patient Reviews' clicked={scrollToReview} />
            </div>

        </div>
        
    );
}
export default ReviewOverview;