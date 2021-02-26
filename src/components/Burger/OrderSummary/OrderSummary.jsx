import React from "react"

import Aux from "../../../aux/aux"
import Button from "../../UI/Button/Button"

const OrderSummary = props => {

    const ingredients = Object.keys(props.ingredients).map(
        item => {return(
            <li key={item}><span style={{fontStyle:"italic"}}>{item}:</span>{props.ingredients[item]}</li>
        )}
    )

    return (
        <Aux>
            <h3>Here is your order summary</h3>
            <ul>
                {ingredients}
            </ul>
            <p><strong>Total Price : {props.totalPrice}</strong></p>
            <p>Wanna proceed to checkout?</p>
            <Button btnType="Success" clicked={props.orderSuccess}>Continue</Button>
            <Button btnType="Danger" clicked={props.orderCancel}>Cancel</Button>
        </Aux>)
}
export default OrderSummary