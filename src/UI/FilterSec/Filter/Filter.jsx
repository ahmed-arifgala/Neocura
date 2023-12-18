import React, {useState} from "react";
import classes from './Filter.module.css';
import checkMark from '../../../assets/Icons/checkMark.png';
import femaleDoc from '../../../assets/Icons/femaleDoc.png';
import maleDoc from '../../../assets/Icons/maleDoc.png';
import mostSatisfied from '../../../assets/Icons/mostSatisfied.png';
import experiencedDr from '../../../assets/Icons/experiencedDr.png';
import onlineDoc from '../../../assets/Icons/onlineDoc.png';
import clinicDoc from '../../../assets/Icons/clinicDoc.png';
import lowFees from '../../../assets/Icons/lowFees.png';



// const docFilterNames = [
//     "Male Doctors",
//     "Female Doctors",
//     "Highest Satisfaction ",
//     "Most Experienced",
//     "Platinum Doctors",
//     "Lowest Fees",
//     "Clinic Doctors",
//   ];

const Filter = ({index, name, handler}) => {

    const images = [maleDoc, femaleDoc, mostSatisfied, experiencedDr, onlineDoc, lowFees, clinicDoc];

    const [rotation, setRotation] = useState(0);
    const [frontside, setFrontside] = useState(true);

    const flip = () => {
        setRotation(rotation + 180);
        setFrontside(!frontside);

        const innerFlipCards = document.querySelectorAll('#flipCardInner');
        const innerFlipCard = innerFlipCards[index];

        innerFlipCard.style.transform = `rotateY(${rotation}deg)`;
        
    }


    const handleClick = () => {
        console.log('handleClick', frontside);
        flip();
        handler(name, frontside);
    }

    return (

        <div id='flipCard' className={classes.FlipCard} onClick={handleClick}>
           
            <div    
                    id='flipCardInner' 
                    className={classes.FlipCardInner} 
                    >   

                <div className={classes.FlipCardFront}>
                    <img src={images[index]} /> 
                    <p className={classes.Title}>{name}</p>
                </div>
                
                <div className={classes.FlipCardBack}>
                    <img src={checkMark} alt="checkMark" />
                    <p className={classes.Title}>{name}</p>
                </div>

            </div>
        </div>
    );

}

export default Filter;