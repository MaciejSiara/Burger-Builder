import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler";

import axios from "../../axios-orders";

const INGREDIENT_PRICES = {
   salad: 0.5,
   cheese: 0.4,
   bacon: 0.7,
   meat: 1.5,
};

class BurgerBuilder extends Component {
   // constructor(props){
   //     super(props);
   //     this.state = {...}
   // }
   state = {
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false,
   };

  

   componentDidMount() {
      axios
         .get("https://my-burger-react-58764.firebaseio.com/ingredients.json")
         .then(res => {
            this.setState({ ingredients: res.data });
         })
         .catch(err => {
            this.setState({ error: true });
         });
   }

   updatePurchaseState(ingredients) {
      const sum = Object.keys(ingredients)
         .map(igKey => {
            return ingredients[igKey];
         })
         .reduce((sum, el) => {
            return sum + el;
         }, 0);
      this.setState({ purchasable: sum > 0 });
   }

   addIngredientHandler = type => {
      const odlCount = this.state.ingredients[type];
      const updateCount = odlCount + 1;
      const updatedIngredients = {
         ...this.state.ingredients,
      };
      updatedIngredients[type] = updateCount;
      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
      this.updatePurchaseState(updatedIngredients);
   };

   removeIngredientHandler = type => {
      const odlCount = this.state.ingredients[type];
      if (odlCount <= 0) return 0;
      const updateCount = odlCount - 1;
      const updatedIngredients = {
         ...this.state.ingredients,
      };
      updatedIngredients[type] = updateCount;
      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
      this.updatePurchaseState(updatedIngredients);
   };

   purchaseHandler = () => {
      this.setState({ purchasing: true });
   };

   purchaseCancelHandler = () => {
      this.setState({ purchasing: false });
   };

   
   purchaseContinueHandler = () => {
      //   alert("You continue!!!");
      this.setState({ loading: true });
      const order = {
         ingredients: this.state.ingredients,
         price: this.state.totalPrice,
         customer: {
            name: "Maciej",
            address: {
               street: "MyStreet 1",
               zipCode: "11-111",
               country: "Poland",
            },
            email: "email@email.com",
         },
         deliveryMethod: "fastest",
         loading: false,
      };
      axios
         .post("/orders.json", order)
         .then(res => {
            this.setState({
               loading: false,
               purchasing: false,
            });
         })
         .catch(error =>
            this.setState({
               loading: false,
               purchasing: false,
            })
         );
   };

   render() {
      const disabledInfo = { ...this.state.ingredients };
      for (let key in disabledInfo) {
         disabledInfo[key] = disabledInfo[key] <= 0;
      }

      let orderSummary = null;
      let burger = this.state.error ? "Cannot load ingredients" : <Spinner />;

      if (this.state.ingredients) {
         burger = (
            <>
               <Burger ingredients={this.state.ingredients} />
               <BuildControls
                  ingredientAdded={this.addIngredientHandler}
                  ingredientRemoved={this.removeIngredientHandler}
                  disabled={disabledInfo}
                  price={this.state.totalPrice}
                  purchasable={this.state.purchasable}
                  purchasing={this.purchaseHandler}
               />
            </>
         );
         orderSummary = (
            <OrderSummary
               ingredients={this.state.ingredients}
               price={this.state.totalPrice}
               purchaseCancelled={this.purchaseCancelHandler}
               purchaseContinued={this.purchaseContinueHandler}
            />
         );
      }

      if (this.state.loading) {
         orderSummary = <Spinner />;
      }

      return (
         <>
            <Modal
               show={this.state.purchasing}
               modalClosed={this.purchaseCancelHandler}
            >
               {orderSummary}
            </Modal>
            {burger}
         </>
      );
   }
}

export default withErrorHandler(BurgerBuilder, axios);
