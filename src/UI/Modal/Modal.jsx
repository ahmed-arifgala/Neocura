import React from "react";
import classes from './Modal.module.css';
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";


const Modal = props => {
    console.log('modal called', props.show)
    const classNames = [classes.Modal, props.className]. join(' ');
 
    return(
    
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div 
                className={classNames}
                style={{transform: props.show? 'translateY(0)': 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'}} >
                
                {props.children}

            </div>
        </Aux>
    );
   
    
};

export default Modal;