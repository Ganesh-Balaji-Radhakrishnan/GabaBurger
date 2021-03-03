import React from "react"

import Logo from "../../Logo/Logo"
//import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem"
import SideDrawerToggler from "../SideDrawer/SideDrawerToggler/SideDrawerToggler"
import NavigationItems from "../NavigationItems/NavigationItems"
import classes from "./Toolbar.module.css"

const Toolbar = props => (
    <header className={classes.Toolbar}> 
        <SideDrawerToggler click={props.toShowSideBar}>Menu</SideDrawerToggler>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar