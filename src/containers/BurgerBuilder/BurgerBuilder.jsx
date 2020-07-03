import React, { Component } from "react";
import { connect } from "react-redux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler";
import * as actionTypes from "../../store/actions";

import axios from "../../axios-orders";

class BurgerBuilder extends Component {
   // constructor(props){
   //     super(props);
   //     this.state = {...}
   // }
   state = {
      purchasing: false,
      loading: false,
      error: false,
   };

   componentDidMount() {
      console.log(this.props);

      //   axios
      //      .get("https://my-burger-react-58764.firebaseio.com/ingredients.json")
      //      .then(res => {
      //         this.setState({ ingredients: res.data });
      //      })
      //      .catch(err => {
      //         this.setState({ error: true });
      //      });
   }

   updatePurchaseState(ingredients) {
      const sum = Object.keys(ingredients)
         .map(igKey => {
            return ingredients[igKey];
         })
         .reduce((sum, el) => {
            return sum + el;
         }, 0);
      return sum > 0;
   }

   purchaseHandler = () => {
      this.setState({ purchasing: true });
   };

   purchaseCancelHandler = () => {
      this.setState({ purchasing: false });
   };

   purchaseContinueHandler = () => {
      //   alert("You continue!!!");
      this.props.history.push("/checkout");
   };

   render() {
      const disabledInfo = { ...this.props.ings };
      for (let key in disabledInfo) {
         disabledInfo[key] = disabledInfo[key] <= 0;
      }

      let orderSummary = null;
      let burger = this.state.error ? "Cannot load ingredients" : <Spinner />;

      if (this.props.ings) {
         burger = (
            <>
               <Burger ingredients={this.props.ings} />
               <BuildControls
                  ingredientAdded={this.props.onAddIngredient}
                  ingredientRemoved={this.props.onRemoveIngredient}
                  disabled={disabledInfo}
                  price={this.props.price}
                  purchasable={this.updatePurchaseState(this.props.ings)}
                  purchasing={this.purchaseHandler}
               />
            </>
         );
         orderSummary = (
            <OrderSummary
               ingredients={this.props.ings}
               price={this.props.price}
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

const mapStateToProps = state => {
   return {
      ings: state.ingredients,
      price: state.totalPrice,
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onAddIngredient: ingName =>
         dispatch({
            type: actionTypes.ADD_INGREDIENT,
            ingredientName: ingName,
         }),
      onRemoveIngredient: ingName =>
         dispatch({
            type: actionTypes.REMOVE_INGREDIENT,
            ingredientName: ingName,
         }),
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
