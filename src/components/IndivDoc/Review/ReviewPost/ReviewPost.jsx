import React from 'react';
import classes from './ReviewPost.module.css';

const ReviewPost = (props) => {

  return (
    <div className={classes.ReviewPost}>
        <h2>Verified Patient</h2>
        <p>{props.name}</p>
        <p>{props.timePassed}</p>
        <p className={classes.Review}>{props.review}</p>
    </div>
  );
};

export default ReviewPost;