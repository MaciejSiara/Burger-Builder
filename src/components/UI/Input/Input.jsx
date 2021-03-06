import React from "react";
import styles from "../../../styles/Input.module.css";

export default function Input(props) {
   let inputElement = null;
   const inputStyle = [styles.InputElement];

   if (props.invalid && props.shouldValidate && props.touched) {
      inputStyle.push(styles.Invalid);
   }

   switch (props.elementType) {
      case "input":
         inputElement = (
            <input
               className={inputStyle.join(" ")}
               {...props.elementConfig}
               value={props.value}
               onChange={props.changed}
            />
         );
         break;
      case "textarea":
         inputElement = (
            <textarea
               className={inputStyle.join(" ")}
               {...props.elementConfig}
               value={props.value}
               onChange={props.changed}
            />
         );
         break;
      case "select":
         inputElement = (
            <select
               className={inputStyle.join(" ")}
               value={props.value}
               onChange={props.changed}
            >
               {props.elementConfig.options.map(option => (
                  <option key={option.value} value={option.value}>
                     {option.displayValue}
                  </option>
               ))}
            </select>
         );
         break;
      default:
         inputElement = (
            <input
               className={inputStyle.join(" ")}
               {...props.elementConfig}
               value={props.value}
               onChange={props.changed}
            />
         );
   }

   return (
      <div className={styles.Input}>
         <label className={styles.Label}>{props.label}</label>
         {inputElement}
      </div>
   );
}
