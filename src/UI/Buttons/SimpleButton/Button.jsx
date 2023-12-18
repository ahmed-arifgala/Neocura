import React from "react";
import classes from './Button.module.css';

const Button = (props) => {
  
    const classNames = [classes.Button, props.class1].join(' ');

    return(
        <div className={classNames} style={props.styling}>
            <button onClick={props.clicked} >{props.text}</button>
        </div>
    );
}

export default Button;