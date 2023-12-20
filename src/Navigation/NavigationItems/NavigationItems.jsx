import React, {useState} from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.module.css';
import NavigationBox from "../NavigationBox/NavigationBox";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import { Link } from "react-router-dom";

const NavigationItems = ()=>{
    
    const [NavBoxContent, setNavBoxContent] = useState(null);
    const [showNavBar, setShowNavBar] = useState(false);

    const CloseNavBox = ()=>{
        setNavBoxContent(
            <NavigationBox 
                    name={'closing'} 
                    show={false} 
                    closeHandler={CloseNavBox} 
            />
       );
        setShowNavBar(true);
    };



    const NavigationItem = (name) => {
       setNavBoxContent(
            <NavigationBox 
                    name={name} 
                    show={true} 
                    closeHandler={CloseNavBox} 
            />
       );

       setShowNavBar(true);
       
    }

    

    return(

        <Aux>

            {showNavBar && NavBoxContent}

            <ul className={classes.NavigationItems}>

                <li onClick={()=>NavigationItem('Doctor')}>Doctor</li>
                <li onClick={()=>NavigationItem('Hospital')}>Hospital</li>
                <li onClick={()=>NavigationItem('Clinic')} >Clinic</li>
                {/* <li onClick={()=>NavigationItem('Laboratory')} >Laboratory</li> */}
                <li><Link to={"/blogs"}>Health Blog</Link></li>
            </ul>
        </Aux>
    );
};

export default NavigationItems;