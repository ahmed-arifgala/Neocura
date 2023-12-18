import React, {useContext} from "react";
import classes from './DocCard.module.css';
import context from "../../../Context/Context";
import doc44 from '../../../assets/images/docImgs/doc44.png';
import doc33 from '../../../assets/images/docImgs/doc33.png';
const DocCard = () => {
    
    const {docInfo} = useContext(context);

    return(
        <div className={classes.DocCard}>
            
            <div className={classes.Image}>
          <img
            src={
              docInfo.docImg == "doc33"
                ? doc33
                : doc44
            }
            alt="Doctor's Image"
          />
        </div>

        <div className={classes.Info}>
            <div>
                <h1>{docInfo.name}</h1>
                <h3>{docInfo.specialization
                    .map(
                        (sp, i) => i!=docInfo.specialization.length - 1 ? sp + ', ' : sp )}
                </h3>
                <h3>{docInfo.education
                    .map(
                        (edu, i) => i!= docInfo.education.length - 1 ? edu.eduDegree + ', ' : edu.eduDegree)}
                </h3>
            </div>
            <div className={classes.ExtraInfo}>
                <div>
                    <h3>Waiting Time</h3>
                    <p>{docInfo.waitTime}</p>
                </div>
                <div>
                    <h3>Experience</h3>
                    <p>{docInfo.experience}</p>
                </div>
                <div>
                    <h3>Satisfied Patients</h3>
                    <p>{(docInfo.satisfiedPatients)+ '%  ( 3 ) ' }</p>
                </div>
            </div>
                

            </div>

        </div>
    
    );
    
};



export default DocCard