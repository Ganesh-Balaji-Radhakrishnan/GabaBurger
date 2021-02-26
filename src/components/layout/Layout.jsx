import React from "react"

import Aux from "../../aux/aux"
import Toolbar from "../Navigation/Toolbar/Toolbar"

import classes from "./Layout.module.css"


const Layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout