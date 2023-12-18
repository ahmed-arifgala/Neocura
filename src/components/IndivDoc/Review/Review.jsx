import React, {useContext, useState} from "react";
import context from "../../../Context/Context";
import ReviewPost from "./ReviewPost/ReviewPost";
import classes from './Review.module.css';
import ImageButton from "../../../UI/Buttons/ImageButton/ImageButton";
import downArrow from '../../../assets/Icons/downArrow.gif';
import upArrow from '../../../assets/Icons/upArrow.gif';

const Review = (props) => {
    const {userReview} = useContext(context);
    const [reviewNumber, setReviewNumber] = useState(3);

    const loadMoreReviews = () => {
        setReviewNumber((prevReviewNumber) => prevReviewNumber + 3 );
    }

    const hideReviews = () => {
        setReviewNumber(3);
    }

    return (
        <div id='review-section'>
            <h1 className={classes.Heading}>Reviews About {props.name} <span>({props.noOfReviews})</span> </h1>

            {
                userReview.reviews.slice(0,reviewNumber).map((ele) => <ReviewPost name={ele.name} timePassed={ele.timePassed} review={ele.review}  />
                )
            }   

            { props.noOfReviews > 3 ?
              reviewNumber < userReview.reviews.length ? 
                <ImageButton  image={downArrow} alt='Load More Reviews' clicked={loadMoreReviews} />
                : <ImageButton  image={upArrow} alt='Hide Reviews' clicked={hideReviews} />
                : null
            } 

        </div>
        
        
    );
}

export default Review;

