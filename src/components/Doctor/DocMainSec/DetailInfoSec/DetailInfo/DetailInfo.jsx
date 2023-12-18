import React from "react";
import classes from './DetailInfo.module.css';


const DetailInfo = ({question, answer, index}) => {
    
    // console.log(question);
    // console.log(answer);
    // console.log(Object.entries(detailInfo));


 


    const answerShow = () => {

        const ansTags = document.querySelectorAll('#ans');
        const ansTag =ansTags[index];
        ansTag.style.opacity = '0';
        ansTag.style.display = 'block';
        setTimeout(() => {
          ansTag.style.opacity = '1';
        }, 30);
    }

    const answerHide = () => {
        const ansTags = document.querySelectorAll('#ans');
        const ansTag =ansTags[index];
        ansTag.style.display = 'none';
    }


    return (
        <div  className={classes.detailInfo} onMouseOver={answerShow} onMouseOut={answerHide}>
            <p id='que' >{question}</p>
            <p id='ans' className={classes.Answer}>{answer}</p>
        </div>
    );
}

export default DetailInfo;

