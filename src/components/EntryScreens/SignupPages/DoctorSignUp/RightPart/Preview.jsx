import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import axios from "axios";
import classes from "./RightPart.module.css";
import { Box, Button, MenuItem } from "@mui/material";

const Preview = ({ setModal, modal, prevSection }) => {
  const Submit = () => {
    axios
      .post("http://localhost:5000/signup/doctor", modal)
      .then((res) => {
        console.log("succes",res);
      })
      .catch((err) => {
        console.log("failed",err);
      });
    console.log({ message: "submitted", data: modal });
  };
  return (
  
    <div style={{padding:"30px 20px"}} className={classes.main}>
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

        {/* Eduaction */}
          <div style={{marginTop: '30px'}}>
            <h2 style={{fontSize: '20px'}}>Eduaction :</h2>
            <div className={classes.Box}>
            <TextField disabled={true} sx={{width:"100%"}} value={modal.educationInfo.pmcNo} label="PMC Number"/>
              {modal.educationInfo?.allEducationsList?.map((e, i) => (
                  <div className={classes.inputMainBox} key={i} style={{marginTop:"20px"}}>
                  <TextField disabled={true} value={e.degreeName} label="Degree Name" />
                  <TextField disabled={true} value={e.universityName} label="University Name" />
                  <TextField disabled={true} value={e.yearsOfQualification} label="Years Of Qualification" />
                </div>
                ))}
              </div>
        </div>

        {/* Professional Info */}
          <div style={{marginTop: '30px'}}>
            <h2 style={{fontSize: '20px'}}>Professional Info :</h2>
            <div className={classes.Box}>
              <div style={{display:"flex", gap:"40px"}}>
            <TextField disabled={true} sx={{width:"100%"}} value={modal.professionInfo.platMember} label="platMember"/>
            {modal.professionInfo.platMember==="Yes"&&<TextField disabled={true} sx={{width:"100%"}} value={modal.professionInfo.platConsultFees} label="Online Consultation Fees"/>}</div>
            <div className={classes.inputMainBox}  style={{marginTop:"20px"}}>
              {modal.professionInfo?.speciality?.map((e, i) => (
                  <TextField disabled={true} value={e} label={`Speciality ${i+1}`} />
                  ))}
                  </div>
                  <div className={classes.inputMainBox} style={{marginTop:"20px"}}>
              {modal.professionInfo?.languages?.map((e, i) => (
                  <TextField disabled={true} value={e} label={`Languages ${i+1}`} />
                  ))}
                  </div>
              </div>
        </div>

        {/* Cliniic */}
        <div style={{marginTop: '30px'}} className={classes.Box}>
            <h2 style={{fontSize: '20px'}}>Clinic Details :</h2>
            <div>
            {modal.clinicInfo&&modal.clinicInfo[0].clinicName?
            <div className={classes.inpu}>
                {
                    modal.clinicInfo&&modal.clinicInfo.map((e,i)=>{
                      return(
                        <>
            <div className={classes.inputMainBox}>
                      {Object.keys(e).map((j,k)=> j!=="clinicId"&&j!=="clinincEmail"&&j!=="clinicTimings"&&<TextField sx={{maxHeight:"60px"}} disabled={true} label={`Clinic ${e.clinicId+1} ${j.slice(6)}`} value={e[j]} />)}
                      </div>
                      <div>
                      <p className={classes.timingHeading}>{`Clinic ${e.clinicId+1} Timings:`}</p>

                      <div style={{display:"grid",gridTemplateColumns:"auto auto",gap:"20px"}}>
                      {Object.keys(e.clinicTimings).map((day,a)=>{
                          return(
                              <div key={a} style={{marginLeft:"0px",display:"flex",alignItems:"center",textAlign:"center",gap:"20px"}} className="">
                                  <p style={{marginTop:"20px",minWidth:"100px"}}>{day.charAt(0).toUpperCase() + day.slice(1)} :</p>
                                  <div style={{display:"flex",alignItems:"center",textAlign:"center"}}>
                                  {e.clinicTimings[day]?.openingTime?<Box sx={{display:"flex"}}><TextField disabled={true} value={e.clinicTimings[day]?.openingTime}  size="small" label="Opening Time" type="time"  />
                                  <TextField disabled={true} value={e.clinicTimings[day]?.closingTime}  size="small" sx={{marginLeft:"1px", padding:"0px",fontSize:"12px"}}  label="Closing Time" type="time"  /></Box>:<p style={{marginTop:"20px"}}>Off</p>}
                                  </div> 
                                  </div> 
                                  
                              )})};</div></div>
                        </>
                      )})
                    }
                      <div>
                      </div>
                

            </div>:<p>No Clinic Info</p>}
            </div>
            
      </div>


        {/* Hospital */}
        <div style={{marginTop: '30px'}} className={classes.Box}>
            <h2 style={{fontSize: '20px'}}>Hospiatl Details :</h2>
            <div>
                  {modal.hospitalInfo&&modal.hospitalInfo[0].hospitalName?
            <div className={classes.inpu}>
                {
                    modal.hospitalInfo&&modal.hospitalInfo.map((e,i)=>{
                      return(
                        <>
            <div className={classes.inputMainBox}>
                      {Object.keys(e).map((j,k)=> j!=="hospitalId"&&j!=="hospitalEmail"&&j!=="hospitalTimings"&&<TextField sx={{maxHeight:"60px"}} disabled={true} label={`Hospital ${e.hospitalId+1} ${j.slice(8)}`} value={e[j]} />)}
                      </div>
                      <div>
                      <p className={classes.timingHeading}>{`Hospital ${e.hospitalId+1} Timings:`}</p>
                      <div style={{display:"grid",gridTemplateColumns:"auto auto",gap:"20px"}}>
                      {Object.keys(e.hospitalTimings).map((day,a)=>{
                          return(
                              <div key={a} style={{marginLeft:"0px",display:"flex",alignItems:"center",textAlign:"center",gap:"20px"}} className="">
                                  <p style={{marginTop:"20px",minWidth:"100px"}}>{day.charAt(0).toUpperCase() + day.slice(1)} :</p>
                                  <div style={{display:"flex",alignItems:"center",textAlign:"center"}}>
                                  {e.hospitalTimings[day]?.openingTime?<Box sx={{display:"flex"}}><TextField disabled={true} value={e.hospitalTimings[day]?.openingTime}  size="small" label="Opening Time" type="time"  />
                                  <TextField disabled={true} value={e.hospitalTimings[day]?.closingTime}  size="small" sx={{marginLeft:"16px"}}  label="Closing Time" type="time"  /></Box>:<p style={{marginTop:"20px"}}>Off</p>}
                                  </div> 
                                  </div> 
                                  
                              )})};</div></div>
                        </>
                      )})
                    }
                      <div>
                      </div>
                

            </div>:<p>No Hospital Info</p>}
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
