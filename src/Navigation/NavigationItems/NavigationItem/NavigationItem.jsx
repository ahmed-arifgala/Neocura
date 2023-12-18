import React, {useContext, useState} from "react";
import classes from './NavigationItem.module.css';
import context from "../../../Context/Context";
import dropDown from '../../../assets/Icons/dropDown.png'
import SideList from "./SideList/SideList";
import { Doctor, HospitalData } from "../../../StateData/NavData/NavData";
import { Link } from "react-router-dom";


const NavigationItem = props => {

    console.log('NavigationItem called');

    const classNames = [classes.NavigationItem, props.class].join(' ');

    const {changeItemIndex, changeRightItemIndex} = useContext(context);
    const [showSideList, setShowSideList] = useState(false);

    const showSideListHandler = () => {
        console.log('ShowSideListHandler called');
        setShowSideList(!showSideList);
    }

    const itemNameList =  ( 
        props.toolbarName === 'Doctor' ? Doctor.map( (obj) => Object.keys(obj)[0] ) :
        props.toolbarName === 'Hospital' || props.toolbarName === 'Clinic' || props.toolbarName === 'Laboratory' ?
             HospitalData.map( (obj) => Object.keys(obj)[0] ) : 
            []
        );


    return(

        <div className={classes.ListWrapper} >
            
            <li className={classNames} >
                
                <Link

                    to = 
                    {
                        props.isRight && !props.icon ? 
                        (`${props.toolbarName}/${itemNameList[props.itemIndex]}/${props.rightItemName}`
                        .split(' ')).join('-') 
                        : null
                    }

                    onClick = 
                    {
                        props.isRight && !props.icon ? 
                        props.closeHandler 
                        : null
                    }

                    className = {props.active ? classes.active : null} 
                    
                    onMouseOver = 
                    {
                         props.isHover ? () => {
                            changeItemIndex(props.def)
                        } 
                         : null
                        
                    }
                    >

                        {props.children}
                    
                </Link>

                {
                    props.icon ? 
                    <img src={dropDown} alt='icon' onClick={showSideListHandler} /> : null
    
                }

            </li>

            {
                 props.icon && showSideList ? <SideList  
                                itemName= {props.rightItemName}
                                itemIndex ={props.itemIndex}
                                toolbarName={props.toolbarName} 
                                closeHandler= {props.closeHandler}
                                link = {`${props.toolbarName}/${itemNameList[props.itemIndex]}/${props.rightItemName}`}
                            /> 

                : null

            }

        </div>
        


    );
    

};

export default NavigationItem;