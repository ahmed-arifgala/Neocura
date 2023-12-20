import React, { useState } from 'react';
import classes from './Profile.module.css';
import docImage from '../../../../assets/images/docImgs/doc44.png';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({
    'Name': 'Ali Hassan',
    'Email': 'ali.hassan@gmail.com',
    'Location': 'Karachi',
    'Phone Number': '033293829442'
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
            <img src={docImage} alt="Doctor's Image" />
          </div>
          
          <div className={classes.InfoContainer}>
            {renderInfoItems()}
            
            </div>


        </div>
      </div>
      <div className={classes.Right}>

          <h1>Hi {profileInfo.Name}!</h1>
          <p>This is your Profile Page. <br /> Here you can view your Personal Details and Details of Appointments.</p>


      </div>
    </div>
  );
};

export default Profile;
