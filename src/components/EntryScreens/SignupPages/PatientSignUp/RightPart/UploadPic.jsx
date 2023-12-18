import React, { useState,useEffect } from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classes from "../../DoctorSignUp/RightPart/RightPart.module.css";

import { Button } from '@mui/material';

const UploadPic = ({modal,setModal,newSection,prevSection}) => {
    
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSubmit = () => {
        if(selectedImage){
        setModal((prev)=>({
            ...prev,
            profilePic:{image: selectedImage}
        }))
        newSection()
    }
        else{
            window.alert('Please select a image')
        }
      };
      useEffect(() => {
        if (modal.profilePic) {
            setSelectedImage(modal.profilePic.image);
        }
    },[modal.profilePic]);
    return (
    <div className={classes.main}>
        <h1>Upload your picture</h1>
        <div className={classes.PicBox}>
        {selectedImage ? <div>
            <img
                alt="not found"
                className={classes.Image}
                src={URL.createObjectURL(selectedImage)}
           />
            <br />
            </div>:
            <div>
                <AccountCircleIcon sx={{fontSize:'220px'}}/>
            </div>
        }
      <br />
      <br />
      
      <input className={classes.inputBox} type="file" name="myImage" required={true} onChange={(event) => {setSelectedImage(event.target.files[0]);}}/>
</div>
        <div className={classes.btnBox}>
            <div className={classes.btnLeft}>
                <Button variant="contained" sx={{width:"140px",fontSize:"16px"}} onClick={prevSection} startIcon={<WestIcon/>} >Previous</Button>
            </div>
            <div className={classes.btnRight}>
                <Button variant="contained" sx={{width:"140px",fontSize:"16px"}} onClick={handleSubmit} endIcon={<EastIcon/>} >Next</Button>
            </div>
            {/* <div className={classes.btnRight}>
                <Button variant="contained" sx={{ backgroundColor:"green",width:"140px",fontSize:"16px"}} onClick={handleSubmit} endIcon={<EastIcon/>} >SignUP</Button>
            </div> */}
        </div>

    </div>
  )
}

export default UploadPic