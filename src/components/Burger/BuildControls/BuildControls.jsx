import React from "react";

import styles from "../../../styles/BuildControls.module.css";
import BuildController from "./BuildController";

const controls = [
   { label: "Salad", type: "salad" },
   { label: "Bacon", type: "bacon" },
   { label: "Cheese", type: "cheese" },
   { label: "Meat", type: "meat" },
];

const buildControls = props => {
   return (
      <div className={styles.BuildControls}>
         <p>
            Current Price: <strong>{props.price.toFixed(2)}</strong>
         </p>
         {controls.map(ctrl => {
            return (
               <BuildController
                  key={ctrl.label}
                  label={ctrl.label}
                  added={() => props.ingredientAdded(ctrl.type)}
                  removed={() => props.ingredientRemoved(ctrl.type)}
                  disabled={props.disabled[ctrl.type]}
                  ingredients={props.ingredients}
               />
            );
         })}
         <button
            className={styles.OrderButton}
            disabled={!props.purchasable}
            onClick={props.purchasing}
         >
            {props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
         </button>
      </div>
   );
};

export default buildControls;
