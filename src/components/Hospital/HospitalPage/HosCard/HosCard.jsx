import React, {useContext} from "react";
import classes from './HosCard.module.css';
import context from "../../../../Context/Context";
import hosImg from '../../../../assets/images/docImgs/hospital.png';
import clinicImg from '../../../../assets/Icons/clinicMainImage.png';

const HosCard = (props) => {
    
    const {HospitalData} = useContext(context);
    const br = HospitalData.branches[0];
    console.log(br);

    return(
        <div className={classes.HosCard}>
        <div className={classes.Image}>
          <img
            src={ props.toolbarName == 'Hospital' ? hosImg : clinicImg }
            alt="Hospital's Image"
          />
        </div>

        <div className={classes.Info}>
            <div>
                <h1>{HospitalData.name}</h1>
                <h3>{

                        br.location
                    
                    }
                </h3>
                
            </div>
            <div className={classes.ExtraInfo}>

                <p><b>Email Address:</b> {br.email} </p>
                <p><b>Postal Code:</b> {br.postalCode}</p>
            </div>
        
            </div>

        </div>
    
    );
    
};



export default HosCard