import React from "react";
import NavigationItem from "./NavigationItem";
import styles from "../../../styles/NavigationItems.module.css";

const navigationItems = () => {
   return (
      <ul className={styles.NavigationItems}>
         <NavigationItem link="/" active>
            Burger Builder
         </NavigationItem>
         <NavigationItem link="/">Checkout</NavigationItem>
      </ul>
   );
};

export default navigationItems;
