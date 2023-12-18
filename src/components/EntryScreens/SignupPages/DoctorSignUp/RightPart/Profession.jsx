import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import EastIcon from "@mui/icons-material/East";
import classes from "./RightPart.module.css";
import WestIcon from '@mui/icons-material/West';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { Button, MenuItem } from "@mui/material";
import { ProffessionData } from "../../../../../data/SignUpData/data";

const Profession = ({ setModal, modal, newSection,prevSection, }) => {
    
  const [ProfessionInfo, setProfessionInfo] = useState({
    speciality: [''],
    platMember:'' ,
    platConsultFees: '',
    languages: [''],
  });
  const[DisplayNo,setDisplayNo]=useState(1)
  const[DisplayNo1,setDisplayNo1]=useState(1)

  const [formErrors, setFormErrors] = useState({
    speciality: [''],
    platMember:"" ,
    platConsultFees: "",
    languages: [''],
  });

  const SpecHandleChange = (e, index) => {
    const { name, value } = e.target;
    let error="";
    if(value.trim() === ""){
        error = "Speciality is required";
    }
    setFormErrors((prevErrors) => ({
        ...prevErrors,
        speciality: prevErrors.speciality.map((item, i) =>
        i === index ? error : item
      ),
    }));
    
    setProfessionInfo((prev) => ({
      ...prev,
      speciality: prev.speciality.map((item, i) =>
        i === index ? value : item
      ),
    }));
  };

  const LangHandleChange = (e, index) => {
    const { name, value } = e.target;
    let error="";
    if(value.trim() === ""){
        error = "Language is required";
    }
    setFormErrors((prevErrors) => ({
        ...prevErrors,
        languages: prevErrors.languages.map((item, i) =>
        i === index ? error : item
      ),
    }));
    
    setProfessionInfo((prev) => ({
      ...prev,
      languages: prev.languages.map((item, i) =>
        i === index ? value : item
      ),
    }));
  };
  
  
  const HandleChange = (e) => {
      const { name, value } = e.target;
      console.log(name)
    let error = "";
    if (name === "platMember" && value.trim() === "") {
      error = "This Field is required";
    } 
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setProfessionInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const add1=()=>{
    const newNo=DisplayNo1+1
    setDisplayNo1(newNo)
    setProfessionInfo((prev) => ({
        ...prev,
        languages: [...prev.languages,'']
      }));
      setFormErrors((prev) => ({
          ...prev,
          languages: [...prev.languages,'']
        }));
    }

const remove1=()=>{
    setDisplayNo1((prevDisplayNo) => prevDisplayNo - 1);
    ProfessionInfo.languages.pop();
    formErrors.languages.pop();

}
  const add=()=>{
    const newNo=DisplayNo+1
    setDisplayNo(newNo)
    setProfessionInfo((prev) => ({
        ...prev,
        speciality: [...prev.speciality,'']
      }));
      setFormErrors((prev) => ({
          ...prev,
          speciality: [...prev.speciality,'']
        }));
    }

const remove=()=>{
    setDisplayNo((prevDisplayNo) => prevDisplayNo - 1);
    ProfessionInfo.speciality.pop();
    formErrors.speciality.pop();

}
console.log(ProfessionInfo)
  useEffect(() => {
    if (modal.professionInfo) {
        setProfessionInfo(modal.professionInfo);
        setDisplayNo(modal.professionInfo.speciality.length);
        setDisplayNo1(modal.professionInfo.languages.length);
    }
  }, [modal.professionInfo]);


  const move = () => {
        let isFilled = true;
        formErrors.languages.map((e,i)=>{
            if(e){
            isFilled = false;}
        }) 
        formErrors.speciality.map((e,i)=>{
            if(e){
            isFilled = false;}
        }) 
        ProfessionInfo.languages.map((e,i)=>{
            if(!e){
            isFilled = false;}
        }) 
        ProfessionInfo.speciality.map((e,i)=>{
            if(!e){
            isFilled = false;}
        }) 
        if(!ProfessionInfo.platMember){        
            isFilled = false;}
        if(ProfessionInfo.platMember==="Yes" &&!ProfessionInfo.platConsultFees){        
            isFilled = false;}
        
       if(isFilled){
        setModal((prev) => ({
            ...prev,
            professionInfo: { ...ProfessionInfo },
          }));
          newSection();
        } else {
          window.alert("PLease fill all the fields");
        }
  };

  return (
    <div className={classes.main}>
      <div className={classes.ContentBox}>
        <h2>Professional Information</h2>
        <p>Enter your required information for registartion </p>
          {/* Specaility */}
        <div>
        <div className={classes.inputMainBox}>
          {[...Array(DisplayNo)].map((q,index)=>(
            <>
            <TextField
              error={!!formErrors.speciality[index]}
              helperText={formErrors.speciality[index]}
              key={index}
              onChange={(e) => {
                SpecHandleChange(e,index);
              }}
              sx={{maxHeight:"80px"}}
              value={ProfessionInfo.speciality[index]}
              required={true}
              label={`Your speciality ${index+1}`}
              name="speciality"
              type="string"
            />
              </>
          ))}
        </div>
          <div  className={classes.addRemoveButtonBox}>
                <Button variant="contained" color="success" disabled={DisplayNo>4} sx={{width:"100px",fontSize:"12px"}} onClick={add}endIcon={<AddIcon/>} >Add</Button>
                <Button   variant="contained" color="error" disabled={DisplayNo<2} sx={{width:"100px",fontSize:"12px"}} onClick={remove} endIcon={<RemoveIcon/>} >Delete</Button>           
            </div>
            </div>

          {/* Languages*/}
        <div style={{marginTop:"40px"}}>
        <div className={classes.inputMainBox}>
          {[...Array(DisplayNo1)].map((q,index)=>(
            <>
            <TextField
              error={!!formErrors.languages[index]}
              helperText={formErrors.languages[index]}
              key={index}
              onChange={(e) => {
                LangHandleChange(e,index);
              }}
              sx={{maxHeight:"80px"}}
              value={ProfessionInfo.languages[index]}
              required={true}
              label={`Language ${index+1}`}
              name="languages"
              type="string"
            />
              </>
          ))}
        </div>
          <div  className={classes.addRemoveButtonBox}>
                <Button variant="contained" color="success" disabled={DisplayNo1>4} sx={{width:"100px",fontSize:"12px"}} onClick={add1}endIcon={<AddIcon/>} >Add</Button>
                <Button   variant="contained" color="error" disabled={DisplayNo1<2} sx={{width:"100px",fontSize:"12px"}} onClick={remove1} endIcon={<RemoveIcon/>} >Delete</Button>           
            </div>
            </div>
      
            
              {/* PlatiniumMember */}

          <p style={{marginTop: '70px'}}>Become Our Platinum Member so that you can consult patinet online through video consultaion</p>
              <p>(We have 20 days free trial for our new users)</p>
              <div className={classes.inputMainBox}>
          {ProffessionData.map((e, i) => (
            <TextField
              error={!!formErrors[e.name]}
              helperText={formErrors[e.name]}
              key={i}
              onChange={(e) => {
                HandleChange(e);
              }}
              select={e.select}
              value={ProfessionInfo[e.name]}
              required={e.required}
              label={e.label}
              name={e.name}
              type={e.type}
            >
              {e.select &&
                e.selectList.map((j, l) => <MenuItem value={j}>{j}</MenuItem>)}
            </TextField>
          ))}
        </div>
        </div>

      <div className={classes.btnBox}>
        <div className={classes.btnLeft}>
        <Button variant="contained" sx={{width:"140px",fontSize:"16px"}} onClick={prevSection} startIcon={<WestIcon/>} >Previous</Button>
        </div>
        <div className={classes.btnRight}>
        <Button variant="contained" sx={{width:"140px",fontSize:"16px"}} onClick={move} endIcon={<EastIcon/>} >Next</Button>
        </div>
        </div>
    </div>
  );
};

export default Profession;
