import React, { Component } from "react";
import { connect } from "react-redux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler";
import * as actions from "../../store/actions/index";

import axios from "../../axios-orders";

class BurgerBuilder extends Component {
   state = {
      purchasing: false,
   };

   componentDidMount() {
      this.props.onInitIngredients();
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
      if (this.props.isAuthenticated) {
         this.setState({ purchasing: true });
      } else {
         this.props.onSetAuthRedirectPath("/checkout");
         this.props.history.push("/auth");
      }
   };

   purchaseCancelHandler = () => {
      this.setState({ purchasing: false });
   };

   purchaseContinueHandler = () => {
      //   alert("You continue!!!");
      this.props.onInitPurchased();
      this.props.history.push("/checkout");
   };

   render() {
      const disabledInfo = { ...this.props.ings };
      for (let key in disabledInfo) {
         disabledInfo[key] = disabledInfo[key] <= 0;
      }

      let orderSummary = null;
      let burger = this.props.error ? "Cannot load ingredients" : <Spinner />;

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
                  isAuth={this.props.isAuthenticated}
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
      ings: state.burgerBuilder.ingredients,
      price: state.burgerBuilder.totalPrice,
      error: state.burgerBuilder.error,
      isAuthenticated: state.auth.idToken !== null,
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onAddIngredient: ingName => dispatch(actions.addIngredient(ingName)),
      onRemoveIngredient: ingName =>
         dispatch(actions.removeIngredient(ingName)),
      onInitIngredients: () => {
         dispatch(actions.initIngredients());
      },
      onInitPurchased: () => {
         dispatch(actions.purchaseInit());
      },
      onSetAuthRedirectPath: path =>
         dispatch(actions.setAuthRedirectPath(path)),
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
