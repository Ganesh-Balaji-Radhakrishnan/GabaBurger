import React, {Component} from "react"

import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import Loader from "../../components/UI/Loader/Loader"

import axios from "../../axios-orders"

import Aux from "../../Hoc/aux/aux"

const INGREDIENT_PRICE = {
    meat: 20,
    bacon: 10,
    cheese: 10,
    salad: 5
}

class BurgerBuilder extends Component{

    state =  {
        ingredient : {
            meat: 0,
            bacon: 0,
            cheese: 0,
            salad: 0,
        },
        totalPrice : 20,
        isCheckOutPossible: false,
        isModalPopUp: false,
        loading: false
    }

    toCheckout = (ingredientsToCheck) => {
        const ingredients = ingredientsToCheck
        let sum = 0
        for(let key in ingredients){
            sum += ingredients[key]
        }
        /* if(sum > 0)
        {this.setState({isCheckOutPossible: true })}
        else{
            this.setState({isCheckOutPossible: false })
        } */
        this.setState({isCheckOutPossible: sum > 0})
    }

    addIngredients = type => {
 
        let oldIngredientCount = this.state.ingredient[type]
        let newIngredientCount = oldIngredientCount + 1
        let updatedIngredients = {...this.state.ingredient}
        updatedIngredients[type] = newIngredientCount

        let newPrice = INGREDIENT_PRICE[type]
        let oldPrice = this.state.totalPrice
        let updatedPrice = newPrice + oldPrice

        this.setState({
            ingredient : updatedIngredients,
            totalPrice: updatedPrice
        })

        this.toCheckout(updatedIngredients)
        //console.log(this.state.ingredient)
    }

    removeIngredients = type => {

        let oldIngredientCount = this.state.ingredient[type]
        if(oldIngredientCount <= 0){
            return
        }
        let newIngredientCount = oldIngredientCount - 1
        let updatedIngredients = {...this.state.ingredient}
        updatedIngredients[type] = newIngredientCount

        let newPrice = INGREDIENT_PRICE[type]
        let oldPrice = this.state.totalPrice
        let updatedPrice = oldPrice - newPrice

        this.setState({
            ingredient : updatedIngredients,
            totalPrice: updatedPrice
        })

        this.toCheckout(updatedIngredients)
        //console.log(this.state.ingredient)
    }

    modalPopUp = () => {
        this.setState({isModalPopUp:true})
    }

    backdropCloser = () => {
        this.setState({isModalPopUp:false})
    }

    orderSuccess = () => {
        //alert('Your order is successful')'
        this.setState({loading:true})
        const order = {
            ingredients : this.state.ingredient,
            totalPrice: this.state.totalPrice,
            customerName: "Ganesh Balaji",
            address: {
                city: "stockholm",
                street: "halsovägen"
            },

            deliveryMethod: "faster"
        }

        axios.post('/orders.json', order)
            .then(res=>this.setState({loading:false, isModalPopUp: false}))
            .catch(err=>this.setState({loading:false, isModalPopUp:false}))
    }

    render(){
        const disabledOptions = {
            ...this.state.ingredient 
        }

        for(let key in disabledOptions){
            if(disabledOptions[key]<=0){
                disabledOptions[key]=true
            } else {
                disabledOptions[key] = false
            }
        }

        //console.log(disabledOptions)

        let orderSummaryUpdate = <OrderSummary totalPrice={this.state.totalPrice} ingredients={this.state.ingredient} orderSuccess={this.orderSuccess} orderCancel={this.backdropCloser}/>

        if(this.state.loading){
            orderSummaryUpdate = <Loader />
        }

        return(
            <Aux>
                <Modal popUpState={this.state.isModalPopUp} backdropCloser={this.backdropCloser}>
                    {orderSummaryUpdate}
                </Modal>
                <Burger ingredients={this.state.ingredient}/>
                <BuildControls 
                    addIngredients={this.addIngredients} 
                    removeIngredients={this.removeIngredients}
                    disabledOptions={disabledOptions}
                    price={this.state.totalPrice}
                    isPurchaseable={this.state.isCheckOutPossible}
                    modalPopUp={this.modalPopUp}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder