import React from "react"

import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import Backdrop from "../../UI/Backdrop/Backdrop"
import Aux from "../../../Hoc/aux/aux"

import Classes from "./SideDrawer.module.css"

const SideDrawer = props => {
    let sideBarClasses = [Classes.SideDrawer, Classes.Close]
    if(props.sideBarState){
        sideBarClasses = [Classes.SideDrawer, Classes.Open]
    }
    return(
        <Aux>
            <Backdrop isModalPopUp={props.sideBarState} backdropCloser={props.toggleSidebar} />
            <div className={sideBarClasses.join(' ')}>
                <div className={Classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
             </div>
        </Aux>
    )
}

export default SideDrawer