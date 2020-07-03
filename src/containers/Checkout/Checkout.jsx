import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import ContactData from "./ContactData";

class Checkout extends Component {
   checkoutCancelHandler = () => {
      this.props.history.goBack();
   };

   checkoutContinueHandler = () => {
      this.props.history.replace("/checkout/contact-data");
   };

   render() {
      return (
         <>
            <CheckoutSummary
               ingredients={this.props.ings}
               checkoutCancel={this.checkoutCancelHandler}
               checkoutContinue={this.checkoutContinueHandler}
            />
            <Route
               path={`${this.props.match.path}/contact-data`}
               component={ContactData}
            />
         </>
      );
   }
}

const mapStateToProps = state => {
   return {
      ings: state.ingredients,
   };
};

export default connect(mapStateToProps, null)(Checkout);
