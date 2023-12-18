import React from "react";
import classes from './FAQSection.module.css';
import FAQImg from '../../assets/images/GeneralImages/FAQ.png';
import FAQ from "./FAQ/FAQ";

const FAQSection = ({FAQData}) => {

    console.log(FAQData)

    return(

   
     
        <div className={classes.FAQSection} >
            <img src={FAQImg} alt='FAQ' />
            {
            FAQData.map((item, i)=>(

                <FAQ key={i}  FAQDetail= {item} index={i} />
            ))
            }
            
        </div>
    );

}

export default FAQSection;
