import React from "react";
import styles from "../../../styles/BuildController.module.css";

const buildController = props => {
   return (
      <div className={styles.BuildController}>
         <div className={styles.Label}>
             {props.label}
             </div>
         <button
            className={styles.Less}
            onClick={props.removed}
            disabled={props.disabled}
         >
            Less
         </button>
         <button className={styles.More} onClick={props.added}>
            More
         </button>
      </div>
   );
};

export default buildController;
