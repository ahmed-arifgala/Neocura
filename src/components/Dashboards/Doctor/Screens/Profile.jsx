import React, { useState } from "react";
import classes from "../../Patient/Screens/Profile.module.css";
import docImage from "../../../../assets/images/docImgs/doc44.png";
import doc111 from "../../../../assets/images/docImgs/doc_111.png";
import doc44 from "../../../../assets/images/docImgs/doc44.png";
import doc33 from "../../../../assets/images/docImgs/doc33.png";

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
              height={140}
              src={
                UserData.docImg == "doc33"
                  ? doc33
                  : UserData.docImg == "doc44"
                  ? doc44
                  : doc111
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
