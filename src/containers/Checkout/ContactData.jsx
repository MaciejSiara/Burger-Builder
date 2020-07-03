import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import Input from "../../components/UI/Input/Input";
import styles from "../../styles/ContactData.module.css";
import axios from "../../axios-orders";

class ContactData extends Component {
   state = {
      orderForm: {
         name: {
            elementType: "input",
            elementConfig: {
               type: "text",
               placeholder: "Your Name",
            },
            value: "",
            validation: {
               required: true,
               minLength: 5,
            },
            valid: false,
            touched: false,
         },
         street: {
            elementType: "input",
            elementConfig: {
               type: "text",
               placeholder: "Street",
            },
            value: "",
            validation: {
               required: true,
            },
            valid: false,
            touched: false,
         },
         zipCode: {
            elementType: "input",
            elementConfig: {
               type: "text",
               placeholder: "ZIP Code",
            },
            value: "",
            validation: {
               required: true,
            },
            valid: false,
            touched: false,
         },
         country: {
            elementType: "input",
            elementConfig: {
               type: "text",
               placeholder: "Country",
            },
            value: "",
            validation: {
               required: true,
            },
            valid: false,
            touched: false,
         },
         email: {
            elementType: "email",
            elementConfig: {
               type: "text",
               placeholder: "Your email",
            },
            value: "",
            validation: {
               required: true,
            },
            valid: false,
            touched: false,
         },
         deliveryMethod: {
            elementType: "select",
            elementConfig: {
               options: [
                  { value: "fastest", displayValue: "Fastest" },
                  {
                     value: "cheapest",
                     displayValue: "Cheapest",
                  },
               ],
            },
            value: "",
            validation: {},
            valid: true,
         },
      },
      formIsValid: false,
      loading: false,
   };

   orderHandler = event => {
      event.preventDefault();
      this.setState({ loading: true });
      const formData = {};
      for (let el in this.state.orderForm) {
         formData[el] = this.state.orderForm[el].value;
      }
      const priceFixed = Number.parseFloat(this.props.price).toFixed(2);
      const order = {
         ingredients: this.props.ings,
         price: priceFixed,
         orderData: formData,
      };
      axios
         .post("/orders.json", order)
         .then(res => {
            this.setState({
               loading: false,
            });
            this.props.history.push("/");
         })
         .catch(error =>
            this.setState({
               loading: false,
            })
         );
   };

   checkValidation = (value, rules) => {
      let isValid = true;
      if (rules.required) {
         isValid = value.trim() !== "" && isValid;
      }

      if (rules.minLength) {
         isValid = value.length >= rules.minLength && isValid;
      }
      return isValid;
   };

   changedHandler = (e, inputElement) => {
      const updatedOrderForm = { ...this.state.orderForm };
      const updatedFormElements = {
         ...updatedOrderForm[inputElement],
      };
      updatedFormElements.value = e.target.value;
      updatedFormElements.valid = this.checkValidation(
         updatedFormElements.value,
         updatedFormElements.validation
      );
      updatedFormElements.touched = true;
      updatedOrderForm[inputElement] = updatedFormElements;

      let formIsValid = true;
      for (let inputElement in updatedOrderForm) {
         formIsValid = updatedOrderForm[inputElement].valid && formIsValid;
      }

      this.setState({
         orderForm: updatedOrderForm,
         formIsValid: formIsValid,
      });
   };

   render() {
      let formElementsArray = [];
      for (let el in this.state.orderForm) {
         formElementsArray.push({
            id: el,
            config: this.state.orderForm[el],
         });
      }

      let form = (
         <form onSubmit={this.orderHandler}>
            {formElementsArray.map(el => (
               <Input
                  key={el.id}
                  elementType={el.config.elementType}
                  elementConfig={el.config.elementConfig}
                  value={el.config.value}
                  changed={event => this.changedHandler(event, el.id)}
                  invalid={!el.config.valid}
                  shouldValidate={el.config.validation}
                  touched={el.config.touched}
               />
            ))}
            <Button btnType="Success" disabled={!this.state.formIsValid}>
               ORDER
            </Button>
         </form>
      );
      if (this.state.loading) {
         form = <Spinner />;
      }
      return (
         <div className={styles.ContactData}>
            <h4>Enter your Contact Data</h4>
            {form}
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      ings: state.ingredients,
      price: state.totalPrice,
   };
};

export default connect(mapStateToProps, null)(ContactData);
