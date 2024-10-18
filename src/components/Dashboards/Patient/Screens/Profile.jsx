import React, { useState } from "react";
import classes from "./Profile.module.css";
import docImage from "../../../../assets/images/docImgs/doc44.png";
import pat1 from "../../../../assets/images/pat1.avif";
import pat2 from "../../../../assets/images/pat2.avif";
import pat3 from "../../../../assets/images/pat3.avif";

const Profile = () => {
  const data = localStorage.getItem("userData");
  const UserData = JSON.parse(data);
  const [profileInfo, setProfileInfo] = useState({
    Name: UserData.name,
    Email: UserData.email,
    Location: "Karachi",
    "Phone Number": UserData.phoneNumber,
  });

  const renderInfoItems = () => {
    return Object.entries(profileInfo).map(([key, value]) => (
      <div key={key} className={classes.InfoItem}>
        <p className={classes.Label}>{key}:</p>
        <p className={classes.Value}>{value}</p>
      </div>
    ));
  };

  return (
    <div className={classes.Profile}>
      <div className={classes.Left}>
        <div className={classes.ProfileInfo}>
          <div className={classes.Image}>
            <img
              height={170}
              src={
                UserData?.img == "pat1"
                  ? pat1
                  : UserData?.img == "pat2"
                  ? pat2
                  : pat3
              }
              alt="Patients's Image"
            />
          </div>

          <div className={classes.InfoContainer}>{renderInfoItems()}</div>
        </div>
      </div>
      <div className={classes.Right}>
        <h1>Hi {profileInfo.Name}!</h1>
        <p>
          This is your Profile Page. <br /> Here you can view your Personal
          Details and Details of Appointments.
        </p>
      </div>
    </div>
  );
};

export default Profile;
