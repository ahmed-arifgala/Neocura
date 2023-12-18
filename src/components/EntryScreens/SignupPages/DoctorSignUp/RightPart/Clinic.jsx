import React, { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import classes from './RightPart.module.css'
import { Box, Button } from '@mui/material';
import { Timings, clinicData } from "../../../../../data/SignUpData/data";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



const Clinic = ({setAllowInfo,allowInfo,modal,setModal,newSection,prevSection}) => {
    const [selected,setSelected]=useState("no")
    const[DisplayNo,setDisplayNo]=useState(1)
    const [ClinicInfo,setClinicInfo]=useState([
        {
        clinicId:0,
        clinicName:'',
        clinicCity:'',
        clinicContact:'',
        clinicWebsite:'',
        clinicEmailAddress:'',
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
    }])
    const [formErrors,setFormErrors]=useState([{
        clinicId:0,
        clinicName:'',
        clinicCity:'',
        clinicContact:'',
        clinicAddress:''
    }])
    const handleChange=(e,index)=>{
        const {name,value}=e.target;
        let error=''
        if(name==='clinicName'&& value.trim()===''){
            error="Name is required"
        }else if(name==='clinicCity'&& value.trim()===''){
            error="City is required"
        }else if(name==='clinicContact'&& value.trim()===''){
            error="Contact is required"
        }else if(name==='clinicAddress'&& value.trim()===''){
            error="Address is required"
        }    
        
        const updatedFormErrors = [...formErrors];
        // updatedFormErrors[index][name]=error
        updatedFormErrors[index] = {
            ...updatedFormErrors[index],
            [name]: error,
        };

        setFormErrors(updatedFormErrors);

        let updatedClinicInfo=[...ClinicInfo]
        updatedClinicInfo[index]={
            ...updatedClinicInfo[index],
            [name]: value,
        }
        setClinicInfo(updatedClinicInfo);
    }
    const handleTimings=(e,index,day)=>{
        const {name,value}=e.target;
        let Day=day.toLowerCase();
        let updatedClinicInfo=[...ClinicInfo]
        const clinicTimings = updatedClinicInfo[index].clinicTimings || {}; 
        clinicTimings[Day] = clinicTimings[Day] || {}; 
        clinicTimings[Day][name] = value;
        updatedClinicInfo[index] = {
        ...updatedClinicInfo[index],
        clinicTimings,
    };
        setClinicInfo(updatedClinicInfo);
    }

    const Submit=()=>{
        if(allowInfo){let isFilled = true;
        for (let i = 0; i < ClinicInfo.length; i++) {
            const { clinicName, clinicCity, clinicAddress,clinicContact } = ClinicInfo[i];
            if (!clinicName || !clinicCity || !clinicAddress ||!clinicContact) {
            isFilled = false;
            break;
            }
        }
       if(isFilled){
                setModal((prev)=>({
                    ...prev,
                    clinicInfo:ClinicInfo
                }))
                newSection();
            }else{
                window.alert("plaeses fill all the fields")
            }}
            else{
                setModal((prev)=>({
                    ...prev,
                    clinicInfo:ClinicInfo
                }))
                newSection();
            }

    }

    const add=()=>{
        const newNo=DisplayNo+1
        setDisplayNo(newNo)
        setClinicInfo((prev)=>([
                ...prev,
                {
                    clinicId:DisplayNo,
                    clinicName:'',
                    clinicCity:'',
                    clinicContact:'',
                    clinicWebsite:'',
                    clinicEmailAddress:'',
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
                }
            ]))
    }

    const remove=()=>{
        setClinicInfo((prevData) => prevData.slice(0, prevData.length - 1));
        setDisplayNo((prevDisplayNo) => prevDisplayNo - 1);
    }

    useEffect(() => {
        if (modal.clinicInfo) {
            setClinicInfo(modal.clinicInfo);
        }
        setDisplayNo(modal.clinicInfo.length)
    },[modal.clinicInfo]);
    
    return (
    <div className={classes.main}>
        <div className={classes.ContentBox}>
            <h2>Clinic Details</h2>
            <p>Enter your Clinic Details (if you have or work in any clinic)</p>
            <div className={classes.WorkInClinicBtnBox}>
                <p className={classes.para2}>Do you work in any clinic?</p>
                <Box className={selected==="no"?classes.WorkInClinicBtn:classes.WorkInClinicBtn2} onClick={()=>{setAllowInfo(true);setSelected("yes")}}>
                    <p>Yes</p>
                </Box>
                <Box className={selected==="yes"?classes.WorkInClinicBtn:classes.WorkInClinicBtn2} onClick={()=>{setAllowInfo(false);setSelected("no")}}>
                    <p>No</p>
                </Box>
            </div>
            {[...Array(DisplayNo)].map((q,index)=>(
            <div>
            <div className={classes.inputMainBox}>
                {
                    clinicData.map((e,i)=><TextField sx={{maxHeight:"60px"}} disabled={!allowInfo} error={!!formErrors[index]?.[e.name]} helperText={formErrors[index]?.[e.name] || ''} onChange={(e)=>{handleChange(e,index)}} required={e.required} value={ClinicInfo[index]?.[e.name] || ''} type={e.type} name={e.name} label={[e.label," ",ClinicInfo[index].clinicId+1]} />
                    )}
            </div>
            <div>
                <p className={classes.timingHeading}>Clinic Timings:</p>
                <p>(if you have off don't enter the timings)</p>
                {Timings.map((day,i)=>{
                    return(
                        <div className={classes.timeBox}>
                            <p>{day}</p>
                            <div>
                            <TextField disabled={!allowInfo} value={ClinicInfo[index]?.clinicTimings[day.toLowerCase()]?.openingTime??''} onChange={(a)=>{handleTimings(a,index,day)}} size="small" name="openingTime" label="Opening Time" type="time"  />
                            <TextField disabled={!allowInfo} value={ClinicInfo[index]?.clinicTimings[day.toLowerCase()]?.closingTime??''} onChange={(a)=>{handleTimings(a,index,day)}} size="small" sx={{marginLeft:"16px"}} name="closingTime" label="Closing Time" type="time"  />
                            </div>
                            {/* <div className={classes.closeBox}>
                            <label htmlFor="checkBox">Off</label>
                            <input disabled={!allowInfo} name="checkBox" height="40px" type="checkbox"/>
                            </div> */}
                        </div>
                        )
                    })}
            </div>
            </div>))}
            <div className={classes.addRemoveButtonBox}>
            <Button variant="contained" color="success" disabled={!allowInfo||DisplayNo>4} sx={{width:"100px",fontSize:"12px"}} onClick={add}endIcon={<AddIcon/>} >Add</Button>
        <Button   variant="contained" color="error" disabled={!allowInfo||DisplayNo<2} sx={{width:"100px",fontSize:"12px"}} onClick={remove} endIcon={<RemoveIcon/>} >Delete</Button>            </div>
        </div>

        <div className={classes.btnBox}>
        <div className={classes.btnLeft}>
        <Button variant="contained" sx={{width:"140px",fontSize:"16px"}} onClick={prevSection} startIcon={<WestIcon/>} >Previous</Button>
        </div>
        <div className={classes.btnRight}>
        <Button variant="contained" sx={{width:"140px",fontSize:"16px"}} onClick={Submit} endIcon={<EastIcon/>} >Next</Button>
        </div>
        </div>

    </div>
  )
}

export default Clinic
