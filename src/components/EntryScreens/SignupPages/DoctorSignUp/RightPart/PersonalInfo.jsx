import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import EastIcon from "@mui/icons-material/East";
import classes from "./RightPart.module.css";
import { Button, MenuItem } from "@mui/material";
import { personalInfoData } from "../../../../../data/SignUpData/data";

const PersonalInfo = ({ setModal, modal, newSection }) => {
  const [PersonalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    email: "",
    city: "",
    martialStatus:"",
    password:"",
    streetAddress: "",
    postalCode: "",
    dob:"",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    martialStatus:"",
    gender: "",
    phoneNumber: "",
    email: "",
    password:"",
    city: "",
    dob:"",
    streetAddress: "",
    postalCode: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    let error = "";
    if (name === "firstName" && value.trim() === "") {
      error = "First Name is required";
    } else if (name === "lastName" && value.trim() === "") {
      error = "Last Name is required";
    }else if (name === "martialStatus" && value.trim() === "") {
      error = "It is required";
    }else if (name === "dob" && value.trim() === "") {
      error = "Date Of Birth is required";
    } else if (name === "gender" && value.trim() === "") {
      error = "Gender is required";
    } else if (name === "phoneNumber" && value.trim() === "") {
      error = "Number is required";
    } else if (name === "email" && value.trim() === "") {
      error = "Email is required";
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid Email";
    } else if (name === "city" && value.trim() === "") {
      error = "City is required";
    } else if (name === "streetAddress" && value.trim() === "") {
      error = "Address is required";
    } else if (name === "password" && value.trim() === "") {
      error = "Password is required";
    }
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (modal.personalInfo) {
      setPersonalInfo(modal.personalInfo);
    }
  }, [modal.personalInfo]);

  const move = () => {
    if (
      !formErrors.firstName &&
      !formErrors.password &&
      !formErrors.lastName &&
      !formErrors.martialStatus &&
      !formErrors.dob &&
      !formErrors.email &&
      PersonalInfo.firstName &&
      PersonalInfo.martialStatus &&
      PersonalInfo.dob &&
      PersonalInfo.password &&
      PersonalInfo.lastName &&
      PersonalInfo.email &&
      !formErrors.gender &&
      !formErrors.phoneNumber &&
      !formErrors.city &&
      PersonalInfo.gender &&
      PersonalInfo.phoneNumber &&
      PersonalInfo.city &&
      !formErrors.streetAddress &&
      PersonalInfo.streetAddress
    ) {
      setModal((prev) => ({
        ...prev,
        personalInfo: { ...PersonalInfo },
      }));
      newSection();
    } else {
      window.alert("PLease fill all the fields");
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.ContentBox}>
        <h2>Your personal information</h2>
        <p>Hello Doc! Enter your personal information to get register</p>
        <div className={classes.inputMainBox}>
          {personalInfoData.map((e, i) => (
            <TextField
              error={!!formErrors[e.name]}
              helperText={formErrors[e.name]}
              key={i}
              onChange={(e) => {
                HandleChange(e);
              }}
              select={e.select}
              value={PersonalInfo[e.name]}
              required={e.required}
              label={e.label}
              name={e.name}
              type={e.type}
            >
              {e.select &&
                e.selectList.map((j, l) => <MenuItem value={j}>{j}</MenuItem>)}
            </TextField>
          ))}
        </div>
      </div>

      <div className={classes.btnBox}>
        <div className={classes.btnRight}>
          <Button
            variant="contained"
            sx={{ width: "140px", fontSize: "16px" }}
            onClick={() => {
              move();
            }}
            endIcon={<EastIcon />}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
