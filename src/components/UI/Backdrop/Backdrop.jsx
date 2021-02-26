import React from "react"

import classes from "./Backdrop.module.css"

const Backdrop = props => (
    props.isModalPopUp ? <div className={classes.Backdrop} onClick={props.backdropCloser}></div> : null
)

export default Backdrop