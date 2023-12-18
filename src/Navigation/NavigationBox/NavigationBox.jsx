import React, {useState} from "react";
import classes from './NavigationBox.module.css';
import LeftNav from "./LeftNav/LeftNav";
import RightNav from "./RightNav/RightNav";
import Context from "../../Context/Context";

const NavigationBox = (props) => {

    const [itemIndex, setItemIndex] = useState(null);
    const [rightItemIndex, setRightItemIndex] = useState(null);

    const changeItemIndex = (i) => {
        setItemIndex(i);
    }

    const changeRightItemIndex = (i) => {
        setRightItemIndex(i);
    }
    

    return(

        
        <div className={`${classes.NavigationBox} ${props.show ? classes.Open : classes.Close}`}>
            {
            <Context.Provider value={{itemIndex, changeItemIndex, rightItemIndex, changeRightItemIndex}}>

                <LeftNav name={props.name} 
                         closeHandler={props.closeHandler}
                />
                
                <RightNav 
                        name={props.name} 
                        closeHandler={props.closeHandler} 
                />

            </Context.Provider>
            }
        </div>

    );
  
}

export default NavigationBox;
