import React, { useState } from 'react'
import classes from './DoctorSignUp.module.css'
import LeftPart from './LeftPart/LeftPart'
import PersonalInfo from './RightPart/PersonalInfo'
import Education from './RightPart/Education'
import Clinic from './RightPart/Clinic'
import Hospital from './RightPart/Hospital'
import UploadPic from './RightPart/UploadPic'
import Preview from './RightPart/Preview'
import Profession from './RightPart/Profession'


const DoctorSignUp = () => {
  const [allowInfo,setAllowInfo]=useState(false);
  const [allowInfoHosp,setAllowInfoHosp]=useState(false);
  const[Modal,setModal]=useState({
    personalInfo:{},
    educationInfo:{
      pmcNo:'',
      allEducationsList:[{
        educationNo:0,
        degreeName:'',
        universityName:'',
        yearsOfQualification:''
    }]
    },
    clinicInfo:[
      {clinicId:0,
      clinicName:'',
      clinicCity:'',
      clinicWebsite:'',
      clinicEmailAddress:'',
      clinicContact:'',
      clinicAddress:'',
      clinicTimings:{
          monday: { openingTime: '', closingTime: '' },
          tuesday: { openingTime: '', closingTime: '' },
          wednesday: { openingTime: '', closingTime: '' },
          thursday: { openingTime: '', closingTime: '' },
          friday: { openingTime: '', closingTime: '' },
          saturday: { openingTime: '', closingTime: '' },
          sunday: { openingTime: '', closingTime: '' },
      }
  }],
    hospitalInfo:[
      {hospitalId:0,
      hospitalName:'',
      hospitalCity:'',
      hospitalWebsite:'',
      hospitalEmailAddress:'',
      hospitalContact:'',
      hospitalAddress:'',
      hospitalTimings:{
          monday: { openingTime: '', closingTime: '' },
          tuesday: { openingTime: '', closingTime: '' },
          wednesday: { openingTime: '', closingTime: '' },
          thursday: { openingTime: '', closingTime: '' },
          friday: { openingTime: '', closingTime: '' },
          saturday: { openingTime: '', closingTime: '' },
          sunday: { openingTime: '', closingTime: '' },
      }
  }],
  professionInfo:{
    speciality: [''],
    platMember:"" ,
    platConsultFees: "",
    languages: [''],

  },
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
      {dataNo==1&&<Education modal={Modal} setModal={setModal} newSection={newSection} prevSection={prevSection}/>}
      {dataNo==2&&<Profession modal={Modal} setModal={setModal} newSection={newSection} prevSection={prevSection}/>}
      {dataNo==3&&<Clinic allowInfo={allowInfo} setAllowInfo={setAllowInfo} modal={Modal} setModal={setModal} newSection={newSection} prevSection={prevSection}/>}
      {dataNo==4&&<Hospital allowInfoHosp={allowInfoHosp} setAllowInfoHosp={setAllowInfoHosp} modal={Modal} setModal={setModal} newSection={newSection} prevSection={prevSection}/>}
      {dataNo==5&&<UploadPic modal={Modal} setModal={setModal} prevSection={prevSection} newSection={newSection}/>}
      {dataNo==6&&<Preview modal={Modal} prevSection={prevSection}  />}
      </div>
    </div>
  )
}

export default DoctorSignUp