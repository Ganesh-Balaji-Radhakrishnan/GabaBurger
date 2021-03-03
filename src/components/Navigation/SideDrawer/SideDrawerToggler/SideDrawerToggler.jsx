import React from "react"
import Classes from "./SideDrawerToggler.module.css"

const SideDrawerToggler = props => (
    <div onClick={props.click} className={Classes.DrawerToggle}>
       <div></div>
       <div></div>
       <div></div>
    </div>
)

export default SideDrawerToggler
