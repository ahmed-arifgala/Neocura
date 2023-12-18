import React from 'react'
import classes from './LeftPart.module.css'


const LeftPart = ({dataNo}) => {
  const para=["Enter your personal information to get register","Enter your education to get register","Enter your required information for registartion","Enter your Clinic Details","Enter your Hospital Details","Enter your picture to get register","Review your information"]
  const SignUpListItem=["Personal Information","Eduaction","Professional Info","Clinic","Hospiatl","User Photo","Preview"]
  return (
    <div className={classes.main}>
      <h2>Step {dataNo+1}</h2>
      <p className={classes.para}>{para[dataNo]}</p>
      <div className={classes.ListBox}>
        {SignUpListItem.map((e,i)=>{
          return(
            <div className={classes.ListItem}>
              <div className={dataNo==i?classes.NumberSelected:classes.Number}>{i+1}</div>
              <p className={dataNo==i?classes.SelectedItemPara:classes.ItemPara}>{e}</p>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default LeftPart