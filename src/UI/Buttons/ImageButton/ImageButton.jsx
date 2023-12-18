import React from 'react';
import classes from './ImageButton.module.css';



const ImageButton = (props) => {
  return (
    <div className={classes.ImageButton}>
          <button onClick={props.clicked}>
                <img src={props.image} alt={props.alt} />
         </button>
    </div>
  
  );
};

export default ImageButton;