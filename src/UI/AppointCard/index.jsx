import React, { useState } from "react";
import classes from "../../components/Doctor/DocMainSec/DocSec/DocSec.module.css";
import IconButton from "../Buttons/IconButton/IconButton";
import icon from "../../assets/Icons/videoCon2.png";
import doc111 from "../../assets/images/docImgs/doc_111.png";
import doc44 from "../../assets/images/docImgs/doc44.png";
import doc33 from "../../assets/images/docImgs/doc33.png";
import { Link } from "react-router-dom";

const DocSec = () => {
  return (
    <div className={classes.DocSec}>
      <div className={classes.DocSecInfo}>
        <div className={classes.Image}>
          <img
            src={
              //   docInfo.docImg == "doc33"
              // ? doc33
              // : docInfo.docImg == "doc44"
              // ? doc44
              doc111
            }
            alt="Doctor's Image"
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
            gap: "60px",
          }}
          // className={classes.Info}
        >
          <div>
            <h1 style={{ fontSize: "22px" }}>Ayesha tirmize</h1>
          </div>

          <div className={classes.ExtraInfo}>
            <div>
              <h3>Date</h3>
              <p>28-9-10</p>
            </div>
            <div>
              <h3>Time</h3>
              <p>4:10pm</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>88292021838</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.ButtonSec}>
        <IconButton id="check" passedClass={classes.ProfileButton2}>
          Accept
        </IconButton>

        <IconButton id="cross" passedClass={classes.Button3}>
          Reject
        </IconButton>
      </div>
    </div>
  );
};

export default DocSec;
