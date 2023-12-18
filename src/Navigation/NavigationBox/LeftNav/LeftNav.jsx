import React from "react";
import classes from './LeftNav.module.css';
import { HospitalData, ClinicData, LabData } from "../../../StateData/NavData/NavData";
import NavigationItem from "../../NavigationItems/NavigationItem/NavigationItem";
import logo from '../../../assets/images/HomeImages/logo.png';

const LeftNav = (props) => {

    let output = [];

    if(props.name === 'Doctor'){
        output = ['Search Doctor By Speciality', 'Search Doctor By Condition', 'Search Doctor By Treatment', 'Search Online Doctors'];
    }
    else if (props.name === 'Hospital'){
        
        HospitalData.forEach((obj)=> output.push('Hospital in ' + Object.keys(obj)[0]));

    }
    else if (props.name === 'Clinic'){
        
        ClinicData.forEach((obj)=> output.push('Clinic in ' + Object.keys(obj)[0]));

    }
    else if (props.name === 'Laboratory'){
        
        LabData.forEach((obj)=> output.push('Laboratory in ' + Object.keys(obj)[0]));

    }

    return(
        <div className={classes.LeftNav}>

            <div className={classes.Logo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={classes.Head}>
                <div className={classes.Button} onClick={props.closeHandler}><b>X</b></div>
                <div className={classes.Heading}>{props.name}</div>
            </div>
            
            <div className={classes.List}>
                <ul>
                    {output.map((ele, i) => (
                            <NavigationItem key={ele} 
                                            link={'./'} 
                                            class={classes.NavigationItem} 
                                            def={i} 
                                            isRight={false}
                                            isHover={true} > 
                                {ele} 
                            </NavigationItem>
                    ))}
                </ul>

            </div>
            

        </div>
    );
}

export default LeftNav;