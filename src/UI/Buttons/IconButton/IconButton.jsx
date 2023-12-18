import React, { useEffect } from "react";
import classes from "./IconButton.module.css";
import consultation from "../../../assets/Icons/appointment1.png";
import profile from "../../../assets/Icons/profile.png";
import { Cancel, Check } from "@mui/icons-material";

const Button = (props) => {
  const classNames = [classes.IconButton, props.passedClass];

  return (
    <div className={classNames.join(" ")}>
      <button onClick={props.clicked}>
        {!props.id == "check" && !props.id == "cross" && (
          <img
            src={props.id == "consultation" ? consultation : profile}
            alt="icon"
          />
        )}
        {props.id == "check" && <Check />}
        {props.id == "cross" && <Cancel />}
        {props.children}
      </button>
    </div>
  );
};

export default Button;
