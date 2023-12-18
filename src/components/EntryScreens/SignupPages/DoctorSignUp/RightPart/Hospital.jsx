import React, { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import classes from './RightPart.module.css'
import { Box, Button } from '@mui/material';
import { Timings, hospitalData } from "../../../../../data/SignUpData/data";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



const Hospital = ({setAllowInfoHosp,allowInfoHosp,modal,setModal,newSection,prevSection}) => {
    const [selected,setSelected]=useState("no")
    const[DisplayNo,setDisplayNo]=useState(1)
    const [HospitalInfo,setHospitalInfo]=useState([
        {
        hospitalId:0,
        hospitalName:'',
        hospitalCity:'',
        hospitalContact:'',
        hospitalWebsite:'',
        hospitalEmail:'',
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
    }])
    const [formErrors,setFormErrors]=useState([{
        hospitalId:0,
        hospitalName:'',
        hospitalCity:'',
        hospitalContact:'',
        hospitalAddress:''
    }])
    const handleChange=(e,index)=>{
        const {name,value}=e.target;
        let error=''
        if(name==='hospitalName'&& value.trim()===''){
            error="Name is required"
        }else if(name==='hospitalCity'&& value.trim()===''){
            error="City is required"
        }else if(name==='hospitalContact'&& value.trim()===''){
            error="Contact is required"
        }else if(name==='hospitalAddress'&& value.trim()===''){
            error="Address is required"
        }    
        
        const updatedFormErrors = [...formErrors];
        // updatedFormErrors[index][name]=error
        updatedFormErrors[index] = {
            ...updatedFormErrors[index],
            [name]: error,
        };

        setFormErrors(updatedFormErrors);

        let updatedHospitalInfo=[...HospitalInfo]
        updatedHospitalInfo[index]={
            ...updatedHospitalInfo[index],
            [name]: value,
        }
        setHospitalInfo(updatedHospitalInfo);
    }
    const handleTimings=(e,index,day)=>{
        const {name,value}=e.target;
        let Day=day.toLowerCase();
        let updatedHospitalInfo=[...HospitalInfo]
        const hospitalTimings = updatedHospitalInfo[index].hospitalTimings || {}; 
        hospitalTimings[Day] = hospitalTimings[Day] || {}; 
        hospitalTimings[Day][name] = value;
        updatedHospitalInfo[index] = {
        ...updatedHospitalInfo[index],
        hospitalTimings,
    };
        setHospitalInfo(updatedHospitalInfo);
    }

    const Submit=()=>{
        if(allowInfoHosp){let isFilled = true;
        for (let i = 0; i < HospitalInfo.length; i++) {
            const { hospitalName, hospitalCity, hospitalAddress,hospitalContact } = HospitalInfo[i];
            if (!hospitalName || !hospitalCity || !hospitalAddress ||!hospitalContact) {
            isFilled = false;
            break;
            }
        }
       if(isFilled){
                setModal((prev)=>({
                    ...prev,
                    hospitalInfo:HospitalInfo
                }))
                newSection();
            }else{
                window.alert("plaeses fill all the fields")
            }}
            else{
                setModal((prev)=>({
                    ...prev,
                    hospitalInfo:HospitalInfo
                }))
                newSection();
            }

    }

    const add=()=>{
        const newNo=DisplayNo+1
        setDisplayNo(newNo)
        setHospitalInfo((prev)=>([
                ...prev,
                {
                    hospitalId:DisplayNo,
                    hospitalName:'',
                    hospitalCity:'',
                    hospitalContact:'',
                    hospitalWebsite:'',
                    hospitalEmail:'',
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
                }
            ]))
    }

    const remove=()=>{
        setHospitalInfo((prevData) => prevData.slice(0, prevData.length - 1));
        setDisplayNo((prevDisplayNo) => prevDisplayNo - 1);
    }

    useEffect(() => {
        if (modal.hospitalInfo) {
            setHospitalInfo(modal.hospitalInfo);
        }
        setDisplayNo(modal.hospitalInfo.length)
    },[modal.hospitalInfo]);
    
    return (
    <div className={classes.main}>
        <div className={classes.ContentBox}>
            <h2>Hospital Details</h2>
            <p>Enter your Hospital Details (if you have or work in any Hospital)</p>
            <div className={classes.WorkInClinicBtnBox}>
                <p className={classes.para2}>Do you work in any Hospital?</p>
                <Box className={selected==="no"?classes.WorkInClinicBtn:classes.WorkInClinicBtn2} onClick={()=>{setAllowInfoHosp(true);setSelected("yes")}}>
                    <p>Yes</p>
                </Box>
                <Box className={selected==="yes"?classes.WorkInClinicBtn:classes.WorkInClinicBtn2} onClick={()=>{setAllowInfoHosp(false);setSelected("no")}}>
                    <p>No</p>
                </Box>
            </div>
            {[...Array(DisplayNo)].map((q,index)=>(
            <div>
            <div className={classes.inputMainBox}>
                {
                    hospitalData.map((e,i)=><TextField sx={{maxHeight:"60px"}} disabled={!allowInfoHosp} error={!!formErrors[index]?.[e.name]} helperText={formErrors[index]?.[e.name] || ''} onChange={(e)=>{handleChange(e,index)}} required={e.required} value={HospitalInfo[index]?.[e.name] || ''} type={e.type} name={e.name} label={[e.label," ",HospitalInfo[index].hospitalId+1]} />
                    )}
            </div>
            <div>
                <p className={classes.timingHeading}>Hospital Timings:</p>
                <p>(if you have off don't enter the timings)</p>
                {Timings.map((day,i)=>{
                    return(
                        <div className={classes.timeBox}>
                            <p>{day}</p>
                            <div>
                            <TextField disabled={!allowInfoHosp} value={HospitalInfo[index]?.hospitalTimings[day.toLowerCase()]?.openingTime??''} onChange={(a)=>{handleTimings(a,index,day)}} size="small" name="openingTime" label="Opening Time" type="time"  />
                            <TextField disabled={!allowInfoHosp} value={HospitalInfo[index]?.hospitalTimings[day.toLowerCase()]?.closingTime??''} onChange={(a)=>{handleTimings(a,index,day)}} size="small" sx={{marginLeft:"16px"}} name="closingTime" label="Closing Time" type="time"  />
                            </div>
                            {/* <div className={classes.closeBox}>
                            <label htmlFor="checkBox">Off</label>
                            <input disabled={!allowInfoHosp} name="checkBox" height="40px" type="checkbox"/>
                            </div> */}
                        </div>
                        )
                    })}
            </div>
            </div>))}
            <div className={classes.addRemoveButtonBox}>
            <Button variant="contained" color="success" disabled={!allowInfoHosp||DisplayNo>4} sx={{width:"100px",fontSize:"12px"}} onClick={add}endIcon={<AddIcon/>} >Add</Button>
        <Button   variant="contained" color="error" disabled={!allowInfoHosp||DisplayNo<2} sx={{width:"100px",fontSize:"12px"}} onClick={remove} endIcon={<RemoveIcon/>} >Delete</Button>            </div>
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

export default Hospital
