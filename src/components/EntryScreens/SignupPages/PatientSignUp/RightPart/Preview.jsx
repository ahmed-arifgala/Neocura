import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import axios from "axios";
import classes from "../../DoctorSignUp/RightPart/RightPart.module.css";
import { Box, Button, MenuItem } from "@mui/material";

const Preview = ({ setModal, modal, prevSection }) => {
  const Submit = () => {
    axios
      .post("http://localhost:5000/signup/patient", modal)
      .then((res) => {
        console.log("succes");
      })
      .catch((err) => {
        console.log("failed");
      });
    console.log({ message: "submitted", data: modal });
  };
  return (
  
    <div style={{padding:"30px 60px"}} className={classes.main}>
      <div className={classes.ContentBox}>
        <h2>Preview</h2>
        <p>Please Review your data before submitting</p>
          
          {/* Picture */}
          <div style={{display:"flex",justifyContent: "center",marginBottom:"30px",alignItems:'center',width:'100%'}}>
          <img
                alt="not found"
                className={classes.Image}
                src={URL.createObjectURL(modal.profilePic.image)}
           />
          </div>


          {/* Personal Infprmation */}
          <div>
            <h2 style={{fontSize: '20px'}}>Personal Information :</h2>
            <div className={classes.inputMainBox}>
              {Object.keys(modal.personalInfo).map((e, i) => (
                <TextField
                  key={i}
                  disabled={true}
                value={modal.personalInfo[e]}
                label={e==="dob"?"Date Of Birth":e==="postalCode"?"Postal Code":e==="streetAddress"?"Street Address":e==="phoneNumber"?"Phone Number":e}
                />
                ))}
              </div>
        </div>
      </div>

      <div className={classes.btnBox}>
        <div className={classes.btnLeft}>
          <Button
            variant="contained"
            sx={{ width: "140px", fontSize: "16px" }}
            onClick={prevSection}
            startIcon={<WestIcon />}
          >
            Previous
          </Button>
        </div>
        {/* <div className={classes.btnRight}>
                <Button variant="contained" sx={{width:"140px",fontSize:"16px"}} onClick={handleSubmit} endIcon={<EastIcon/>} >Next</Button>
            </div> */}
        <div className={classes.btnRight}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "green", width: "140px", fontSize: "16px" }}
            onClick={Submit}
            endIcon={<EastIcon />}
          >
            SignUP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
