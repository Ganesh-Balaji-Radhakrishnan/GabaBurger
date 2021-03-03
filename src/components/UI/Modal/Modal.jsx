import React, {Component} from "react"

import Aux from "../../../Hoc/aux/aux"
import Backdrop from "../Backdrop/Backdrop"

import classes from "./Modal.module.css"

class Modal extends Component{
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.popUpState !== this.popUpState){
            return true
        }
    }
    render(){
        return(
            <Aux>
                <Backdrop isModalPopUp={this.props.popUpState} backdropCloser={this.props.backdropCloser}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.popUpState ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.popUpState ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux> 
        )
    }
} 
export default Modal