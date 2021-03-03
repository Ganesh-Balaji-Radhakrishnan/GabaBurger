import React, {Component} from "react"

import Aux from "../aux/aux"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"

import classes from "./Layout.module.css"


class Layout extends Component{

    state={
        isSideBarOn: false
    }

    setSideBarOn = () => {
        this.setState({
            isSideBarOn: !this.state.isSideBarOn
        })
    }

    render(){
        return(
            <Aux>
                <Toolbar toShowSideBar={this.setSideBarOn}/>
                <SideDrawer sideBarState={this.state.isSideBarOn} toggleSidebar={this.setSideBarOn}/>
                <main className={classes.Content}>
                     {this.props.children}
                </main>
            </Aux>
        )
    } 
}

export default Layout