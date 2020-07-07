import React from "react";
import NavigationItem from "./NavigationItem";
import styles from "../../../styles/NavigationItems.module.css";

const navigationItems = props => {
   return (
      <ul className={styles.NavigationItems}>
         <NavigationItem link="/" clicked={props.clicked}>
            Burger Builder
         </NavigationItem>
         {props.isAuthenticated ? (
            <NavigationItem link="/orders" clicked={props.clicked}>
               Orders
            </NavigationItem>
         ) : null}
         {!props.isAuthenticated ? (
            <NavigationItem link="/auth" clicked={props.clicked}>
               Authentication
            </NavigationItem>
         ) : (
            <NavigationItem link="/logout" clicked={props.clicked}>
               Logout
            </NavigationItem>
         )}
      </ul>
   );
};

export default navigationItems;
