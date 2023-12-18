import React, {useContext} from "react";
import classes from './HosLeftSide.module.css'
import context from "../../../../../Context/Context";
import SectionCard from "../../../../IndivDoc/IndivDocMainSec/LeftSideSec/SectionCard/SectionCard";

const HosLeftSide = () => {
    
    const {HospitalData} = useContext(context);

    const sectionList = [
        [
        "Services provided by ", 
                ["Emergency Care",
            " Banking Services",
                "Nuclear Medicine",
                "Clinical Psychology",
                "Dermatology",
            " Pain Relief Center",
                "Nutrition/Dietitian",
                "Nephrology",
                "Psychiatry",
               ]

        ],

        [ "Facilities at ", 

            [
                "Cancer Center",
                "Cardiology",
                "Dermatology"  ,
                "Diabetes & Endocrinology",
                "General Medicince",
                "Gasternology",
                "Gynecology & Obstetrics",
                "General Surgery",
                "Hematology & Oncology",
                "Internal Medicine",
                "ENT"

            ]

        ]
    ] 


    return(
        <div className={classes.HosLeftSide}>

            {
                sectionList.map(
                    (sec)=> {
                        return (
                            <SectionCard heading={sec[0] + ' ' + HospitalData.name} data={sec[1]}/>
                        );
                    }
                )
            }
           
        </div>
        
    );
}

export default HosLeftSide;