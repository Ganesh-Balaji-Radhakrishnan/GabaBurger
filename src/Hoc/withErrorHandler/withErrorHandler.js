import React from "react"

import Aux from "../aux/aux"
import Modal from "../../components/UI/Modal/Modal"

const withErrorHandler = WrappedComponent => {
    return (props) => {
        return(
            <Aux>
                <Modal show/>
                <WrappedComponent {...props} />
            </Aux>
        )
    }
}

export default withErrorHandler