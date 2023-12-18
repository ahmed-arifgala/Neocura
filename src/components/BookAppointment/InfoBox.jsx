import { Box, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import ReviewsIcon from "@mui/icons-material/Reviews";
import pic from "../../assets/images/dr.jpg";
import classes from "./BookAppointment.module.css";
import React from "react";
import doc111 from "../../assets/images/docImgs/doc_111.png";
import doc44 from "../../assets/images/docImgs/doc44.png";
import doc33 from "../../assets/images/docImgs/doc33.png";
const InfoBox = ({ img, name, spec, loc, phone, fees }) => {
  return (
    <div className={classes.infoBox}>
      <img
        className={classes.Pic}
        src={img == "doc33" ? doc33 : img == "doc44" ? doc44 : doc111}
        alt="Dr pic"
      />
      <div className={classes.infoBg}>
        <h1>{name}</h1>
        <Button
          sx={{ color: "white", marginLeft: "10px" }}
          startIcon={<ReviewsIcon />}
        >
          See Reviews
        </Button>
      </div>
      <div className={classes.info}>
        <h6>{spec}</h6>
        <div className={classes.IconBox}>
          <LocationOnIcon sx={{ color: "#325f8b" }} />
          <p>{loc}</p>
        </div>
        <h4>Fee: Rs {fees}</h4>
        <Button
          sx={{ width: "300px", backgroundColor: "#325f8b" }}
          startIcon={<PhoneIcon sx={{ color: "white", marginRight: "10px" }} />}
          variant="contained"
        >
          {phone}
        </Button>
      </div>
    </div>
  );
};

export default InfoBox;
