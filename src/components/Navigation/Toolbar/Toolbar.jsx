import React from "react"

import Logo from "../../Logo/Logo"
//import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem"
import NavigationItems from "../NavigationItems/NavigationItems"
import classes from "./Toolbar.module.css"

const Toolbar = props => (
    <header className={classes.Toolbar}> 
        <Logo/>
        <div>Menu</div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar