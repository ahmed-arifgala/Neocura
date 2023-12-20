import React from "react";
import classes from "../../Patient/Screens/Setting.module.css";
import Button from "../../../../UI/Buttons/SimpleButton/Button";

const Setting = () => {
  const data = localStorage.getItem("userData");
  const UserData = JSON.parse(data);
  const profileInfo = {
    Name: UserData.name,
    Email: UserData.email,
    Location: "Karachi",
    "Phone Number": UserData.phoneNumber,
  };

  return (
    <div className={classes.Setting}>
      <h1>Customize Settings</h1>
      <div className={classes.Main}>
        <div className={classes.Dual}>
          <div className={classes.Field}>
            <label>First Name: </label> <br />
            <input type="text" value={profileInfo.Name.split(" ")[0]} />
          </div>
          <div className={classes.Field}>
            <label>Last Name: </label> <br />
            <input type="text" value={profileInfo.Name.split(" ")[1]} />
          </div>
        </div>

        <div className={classes.Field}>
          <label>City</label>
          <br />
          <input type="text" value={profileInfo.Location} />
        </div>

        <div className={classes.Field}>
          <label>Email Address: </label>
          <br />
          <p>Your Current Email Address is: {profileInfo.Email}</p>
        </div>

        <div className={classes.Dual}>
          <div className={classes.Field}>
            <label>New Email Address: </label>
            <br />
            <input type="email" />
          </div>
          <div className={classes.Field}>
            <label>Current Password: </label>
            <br />
            <input type="password" />
          </div>
        </div>

        <div style={{ width: "50%" }}>
          <Button styling={{ fontSize: "13px" }} text="Update Email" />
        </div>

        <div className={classes.Dual}>
          <div className={classes.Field}>
            <label>Current Password </label>
            <br />
            <input type="password" />
          </div>
          <div className={classes.Field}>
            <label>New Password: </label>
            <br />
            <input type="password" />
          </div>
        </div>

        <div style={{ width: "50%" }}>
          <Button styling={{ fontSize: "13px" }} text="Change Password" />
        </div>
      </div>
    </div>
  );
};

export default Setting;
