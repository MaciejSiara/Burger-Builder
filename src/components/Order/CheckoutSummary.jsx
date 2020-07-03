import React from "react";

import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";

import styles from "../../styles/CheckoutSummary.module.css";

export default function CheckoutSummary(props) {
   return (
      <div className={styles.CheckoutSummary}>
         <h1>Some catchy text</h1>
         <div style={{ width: "100%", margin: "auto" }}>
            <Burger ingredients={props.ingredients} />
         </div>
         <Button btnType="Danger" clicked={props.checkoutCancel}>
            CANCEL
         </Button>
         <Button btnType="Success" clicked={props.checkoutContinue}>
            CONTINUE
         </Button>
      </div>
   );
}
