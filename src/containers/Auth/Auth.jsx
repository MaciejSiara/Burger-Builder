import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";

import * as actions from "../../store/actions/index";
import styles from "../../styles/Auth.module.css";

class Auth extends Component {
   state = {
      controls: {
         email: {
            elementType: "input",
            elementConfig: {
               type: "email",
               placeholder: "Mail Address",
            },
            value: "",
            validation: {
               required: true,
               isEmail: true,
            },
            valid: false,
            touched: false,
         },
         password: {
            elementType: "input",
            elementConfig: {
               type: "password",
               placeholder: "Password",
            },
            value: "",
            validation: {
               required: true,
               minLength: 6,
            },
            valid: false,
            touched: false,
         },
      },
      formIsValid: false,
      isSignup: true,
   };

   componentDidMount() {
      if (!this.props.buildingBurger && this.props.authRedirectPath !== "/") {
         this.props.onSetAuthRedirectPath();
      }
   }

   checkValidity = (value, rule) => {
      let isValid = true;
      if (rule.required) {
         isValid = value.trim() !== "" && isValid;
      }

      if (rule.minLength) {
         isValid = value.length >= rule.minLength && isValid;
      }

      if (rule.isEmail) {
         const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         isValid = pattern.test(value) && isValid;
      }

      return isValid;
   };

   inputChangedHandler = (inputElement, event) => {
      const updatedControls = {
         ...this.state.controls,
         [inputElement]: {
            ...this.state.controls[inputElement],
            value: event.target.value,
            valid: this.checkValidity(
               event.target.value,
               this.state.controls[inputElement].validation
            ),
            touched: true,
         },
      };

      let formIsValid = true;
      for (let element in updatedControls) {
         formIsValid = updatedControls[element].valid && formIsValid;
      }

      this.setState({ controls: updatedControls, formIsValid: formIsValid });
   };

   submitHandler = event => {
      event.preventDefault();
      this.props.onAuth(
         this.state.controls.email.value,
         this.state.controls.password.value,
         this.state.isSignup
      );
   };

   switchAuthModeHandler = () => {
      this.setState(prevState => {
         return { isSignup: !prevState.isSignup };
      });
   };

   render() {
      const formElementsArray = [];
      for (let key in this.state.controls) {
         formElementsArray.push({
            id: key,
            config: this.state.controls[key],
         });
      }
      let form = formElementsArray.map(formElement => (
         <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={e => this.inputChangedHandler(formElement.id, e)}
         />
      ));

      if (this.props.loading) {
         form = <Spinner />;
      }

      let errorMessage = null;
      if (this.props.error) {
         errorMessage = (
            <p style={{ color: "red", fontWeight: "bold" }}>
               {this.props.error.message}
            </p>
         );
      }

      let authRedirect = null;

      if (this.props.isAuthenticated) {
         authRedirect = <Redirect to={this.props.authRedirectPath} />;
      }

      return (
         <div className={styles.Auth}>
            {authRedirect}
            {errorMessage}
            <form onSubmit={this.submitHandler}>
               {form}
               <Button btnType="Success">Submit</Button>
            </form>
            <Button btnType="Danger" clicked={this.switchAuthModeHandler}>
               {this.state.isSignup ? "I want to SIGN IN" : "I want to SIGN UP"}
            </Button>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      loading: state.auth.loading,
      error: state.auth.error,
      isAuthenticated: state.auth.idToken !== null,
      buildingBurger: state.burgerBuilder.building,
      authRedirectPath: state.auth.authRedirectPath,
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onAuth: (email, password, isSignup) =>
         dispatch(actions.auth(email, password, isSignup)),
      onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
