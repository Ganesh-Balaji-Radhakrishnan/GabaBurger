import React from "react"

import LogoImage from "../../assets/burger-logo.png"
import classes from "./Logo.module.css"

const Logo = props => (
    <div className={classes.LogoBox}>
        <img src={LogoImage} alt="Logo of our burger app"/>
    </div>
)

export default Logo