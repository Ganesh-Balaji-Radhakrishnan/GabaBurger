import React from "react"

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

import classes from "./Burger.module.css"

const Burger = props => {
    /* const transformedIngredients  = Object.keys(props.ingredients)
                                          .map( iKey => [...Array(iKey)]
                                          .map((_,index)=> <BurgerIngredient key={iKey+index} type={iKey}/>) )
 */
    const transformedIngredients = []  

    for (let key in props.ingredients) {   
        for (let i = 0; i < props.ingredients[key]; i++) 
        {     
            transformedIngredients.push(<BurgerIngredient key={key + i} type={key} />)
        } 
    }
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients.length ? transformedIngredients : <p>Please add ingredients</p>}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default Burger
