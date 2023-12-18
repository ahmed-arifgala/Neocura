import React, { useState } from 'react'
import classes from './AccountType.module.css'
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Doctor from '../../../../assets/images/doctor.png';
import Patient from '../../../../assets/images/patient.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const AccountType = () => {
    const navigate=useNavigate()
    const[selected,setSelected]=useState("")
    const handleSubmit = () => {
    if(selected){
        navigate(`/signup/${selected}`)
    }else{
        window.alert("select one account type")
    }
    }
  return (
    <div className={classes.main}>
        <div className={classes.loginBox}>
          <div className={classes.mainInputBox}>
          <h2 className={classes.Heading}>Choose Account Type</h2>
          <Box className={classes.mainTypeBox}>
            <Box className={selected==="doctor"?[classes.SelectedOne,classes.ImageBox]:classes.ImageBox} onClick={()=>{setSelected("doctor")}}>
              <img src={Doctor} className={classes.Image}/>
              <h4>Doctor</h4>
              {selected==="doctor"&&<Box className={classes.checkBox}><CheckCircleIcon sx={{fontSize:"40px"}} color="primary"/></Box>}
            </Box>
            <Box className={selected==="patient"?[classes.SelectedOne,classes.ImageBox]:classes.ImageBox} onClick={()=>{setSelected("patient")}}>
              <img src={Patient} className={classes.Image}/>
              <h4>Patient</h4>
              {selected==="patient"&&<Box className={classes.checkBox}><CheckCircleIcon  sx={{fontSize:"40px"}} color="primary"/></Box>}
            </Box>
          </Box>  
          
          <Button size='large' sx={{width:"100%",margin:"6px 0px",fontSize:"14px"}} onClick={handleSubmit} variant="contained">Next</Button>
        </div>
      </div>
      </div>
  )
}

export default AccountType;