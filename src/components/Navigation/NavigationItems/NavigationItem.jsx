import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../../styles/NavigationItem.module.css";

const navigationItem = props => {
   return (
      <li className={styles.NavigationItem}>
         <NavLink
            to={props.link}
            exact
            activeClassName={styles.active}
            onClick={props.clicked}
         >
            {props.children}
         </NavLink>
      </li>
   );
};

export default navigationItem;
