import React, { useState } from 'react'
import classes from '../DoctorSignUp/DoctorSignUp.module.css'
import LeftPart from './LeftPart/LeftPart'
import PersonalInfo from './RightPart/PersonalInfo'
import UploadPic from './RightPart/UploadPic'
import Preview from './RightPart/Preview'


const PatientSignUp = () => {
  const[Modal,setModal]=useState({
    personalInfo:{},
    profilePic:{},
  })
  
  
  console.log(Modal)
  const[dataNo,setDataNo]=useState(0)
  const newSection=()=>{
    setDataNo(dataNo+1)
    }
  const prevSection=()=>{
      setDataNo(dataNo-1)
  }
  return (
    <div className={classes.main}>
      <div className={classes.Box}>
      <LeftPart dataNo={dataNo}/>
      {dataNo==0&&<PersonalInfo modal={Modal} setModal={setModal} newSection={newSection} />}
      {dataNo==1&&<UploadPic modal={Modal} setModal={setModal} prevSection={prevSection} newSection={newSection}/>}
      {dataNo==2&&<Preview modal={Modal} prevSection={prevSection}  />}
      </div>
    </div>
  )
}

export default PatientSignUp