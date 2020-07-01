import React from "react";
import styles from "../../../styles/DrawerToggle.module.css";

export default function DrawerToggle(props) {
   return (
      <div className={styles.Menu} onClick={props.click}>
         <div></div>
         <div></div>
         <div></div>
      </div>
   );
}
