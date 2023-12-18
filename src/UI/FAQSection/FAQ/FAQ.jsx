import React, {useState} from "react";
import classes from './FAQ.module.css';
import addIcon from '../../../assets/Icons/plus.png';

const FAQ = ({FAQDetail, index}) => {

    // console.log('FAQDetail',FAQDetail);
    const [show, setShow] = useState(false);

    const showAnswer = () => {
        setShow(true);
        const ansTags = document.querySelectorAll('#fans');
        const FAQAll = document.querySelectorAll('#FAQ');
        const FAQ = FAQAll[index];
        const ansTag = ansTags[index];
        const queTags = document.querySelectorAll('#fque');
        const queTag = queTags[index];
        const addIconBAll = document.querySelectorAll('#addIcon'); 
        const addIconB = addIconBAll[index];
        ansTag.style.opacity = '0';
    
        setTimeout(() => {
            FAQ.style.backgroundColor = 'rgb(236, 248, 248)';
            ansTag.style.display = 'block';
            addIconB.src = require('../../../assets/images/Icons/minus.png');
            // queTag.style.color = '#60bbad';
          }, 300);

        setTimeout(() => {
            ansTag.style.opacity = '1';
        }, 325);
        
    }


    const hideAnswer = () => {
        setShow(false);
        const ansTags = document.querySelectorAll('#fans');
        const queTags = document.querySelectorAll('#fque');
        const queTag = queTags[index];
        const FAQAll = document.querySelectorAll('#FAQ');
        const FAQ = FAQAll[index];
        const ansTag = ansTags[index];
        const addIconBAll = document.querySelectorAll('#addIcon'); 
        const addIconB = addIconBAll[index];

        
        setTimeout(() => {
            ansTag.style.opacity = '0';
            // queTag.style.color = '#60bbad';
            ansTag.style.display = 'none';
            FAQ.style.backgroundColor = '#60bbad';
            addIconB.src = require('../../../assets/images/Icons/plus.png');
          }, 300);


       

    }

    return(
        <div id='FAQ' className={classes.FAQ}>
            <p id='fque' className={classes.Question}> 
                {FAQDetail.question}
                <img id='addIcon' src={addIcon} onClick={show? hideAnswer : showAnswer}/>
            </p>
            <p id='fans'  className={classes.Answer} >{FAQDetail.answer}</p>
        </div>
    );
}

export default FAQ;