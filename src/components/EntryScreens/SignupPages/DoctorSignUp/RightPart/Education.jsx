import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import AddIcon from '@mui/icons-material/Add';
import classes from './RightPart.module.css'
import { Button, MenuItem } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { educationData } from "../../../../../data/SignUpData/data";


const Education = ({modal,setModal,newSection,prevSection}) => {
    const[DisplayNo,setDisplayNo]=useState(1)
    const [EducationData,setEducationData]=useState({
        pmcNo:'',
        allEducationsList:[{
        educationNo:0,
        degreeName:'',
        universityName:'',
        yearsOfQualification:''
    }]})
    const [pmcError,setpmcError]=useState('')
    const [formErrors,setFormErrors]=useState([{
        degreeName:'',
        universityName:'',
        yearsOfQualification:''
    }])

    const HandleChange=(e,index)=>{
        const {name,value}=e.target;
        let error=''
        if(name==='degreeName'&& value.trim()===''){
            error="Degree Name is required"
        }else if(name==='universityName'&& value.trim()===''){
            error="University Name is required"
        }else if(name==='yearsOfQualification'&& value.trim()===''){
            error="Years is required"
        }    
        
        const updatedFormErrors = [...formErrors];
        // updatedFormErrors[index][name]=error
        updatedFormErrors[index] = {
            ...updatedFormErrors[index],
            [name]: error,
        };

        setFormErrors(updatedFormErrors);

        let updatedEducationList=[...EducationData.allEducationsList]
        updatedEducationList[index]={
            ...updatedEducationList[index],
            [name]: value,
        }
        setEducationData((prevData) => ({
            ...prevData,
            allEducationsList: updatedEducationList,
          }));
        
    }
    
    const Submit=()=>{
        const PmcFilled=EducationData.pmcNo&&EducationData.pmcNo.trim() !==''
        let isFilled = true;
        for (let i = 0; i < EducationData.allEducationsList.length; i++) {
            const { degreeName, universityName, yearsOfQualification } = EducationData.allEducationsList[i];
            if (!degreeName || !universityName || !yearsOfQualification) {
            isFilled = false;
            break;
            }
        }
       if(isFilled&&PmcFilled){
                setModal((prev)=>({
                    ...prev,
                    educationInfo:EducationData
                }))
                newSection();
            }else{
                window.alert("plaeses fill all the fields")
            }


    }

    const changePmc=(e)=>{
        let error=''
        if(e.trim()===''){
            error="PMC Number is required"
        }   
        setpmcError(error);
        setEducationData((prev)=>({
            ...prev,
            pmcNo:e
        }))
    }

    const add=()=>{
        const newNo=DisplayNo+1
        setDisplayNo(newNo)
            setEducationData((prev)=>({
                ...prev,
                allEducationsList:[
                    ...prev.allEducationsList,
                        {
                            educationNo:DisplayNo,
                            degreeName:'',
                            universityName:'',
                            yearsOfQualification:''
                        }]
                    }))
    }
    const remove=()=>{
        setEducationData((prevData) => ({...prevData,allEducationsList:prevData.allEducationsList.slice(0, prevData.allEducationsList.length - 1)}));
        setDisplayNo((prevDisplayNo) => prevDisplayNo - 1);
    }
    
    useEffect(() => {
        if (modal.educationInfo) {
            setEducationData(modal.educationInfo);
        }
        setDisplayNo(modal.educationInfo.allEducationsList.length)
    },[modal.educationInfo]);
    
      
    return (
    <div className={classes.main}>
        <div className={classes.ContentBox}>
            <h2>Education</h2>
            <p>Enter your Educational Details</p>
            <TextField required={true} label="PMC Number" error={pmcError} sx={{maxHeight:"70px"}} value={EducationData.pmcNo} helperText={pmcError} type="string" name="pmcNo" onChange={(e)=>{changePmc(e.target.value)}} />
            {
                [...Array(DisplayNo)].map((q,index)=>(
                    <div className={classes.inputMainBox} style={{marginTop:"20px"}}>
                        {
                          educationData.map((e,i)=><TextField sx={{maxHeight:"70px"}} required={e.required} value={EducationData.allEducationsList[index]?.[e.name] || ''} error={!!formErrors[index]?.[e.name]}
                            helperText={formErrors[index]?.[e.name] || ''} onChange={(a)=>{HandleChange(a,index)}} type={e.type} label={e.label} name={e.name} />)
                        } 
                        </div>
                ))
                }
            <div className={classes.addRemoveButtonBox}>
        <Button variant="contained" color="success" disabled={DisplayNo>4} sx={{width:"100px",fontSize:"12px"}} onClick={add}endIcon={<AddIcon/>} >Add</Button>
        <Button   variant="contained" color="error" disabled={DisplayNo<2} sx={{width:"100px",fontSize:"12px"}} onClick={remove} endIcon={<RemoveIcon/>} >Delete</Button>
            </div>
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

export default Education