import React from "react"

import Aux from "../../../aux/aux"
import Backdrop from "../Backdrop/Backdrop"

import classes from "./Modal.module.css"

const Modal = props => (
    <Aux>
        <Backdrop isModalPopUp={props.popUpState} backdropCloser={props.backdropCloser}/>
        <div 
            className={classes.Modal}
            style={{
                transform: props.popUpState ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.popUpState ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Aux>   
)

export default Modal