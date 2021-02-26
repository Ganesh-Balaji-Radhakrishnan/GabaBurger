import React from "react"

import BuildControl from "./BuildControl/BuildControl"
import classes from "./BuildControls.module.css"

const control = [
    {label: "Meat", type:"meat"},
    {label: "Salad", type:"salad"},
    {label: "Bacon", type:"bacon"},
    {label: "Cheese", type:"cheese"}
]

const BuildControls = props => (
    <div className={classes.BuildControls}>
        <p>Burger Price : <strong>{props.price.toFixed(2)}</strong></p>
      {control.map( item => 
        <BuildControl 
            key={item.label} 
            label={item.label} 
            addIngredients={()=>props.addIngredients(item.type)}
            removeIngredients={()=>props.removeIngredients(item.type)}
            disabled={props.disabledOptions[item.type]}
        />
        )}
        <button 
            className={classes.OrderButton} 
            disabled={!props.isPurchaseable} 
            onClick={props.modalPopUp}
        >
            Check Out
        </button>
    </div>
)

export default BuildControls