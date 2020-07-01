import React from "react";
import burgerLogo from "../../assets/images/logo.png";
import styles from "../../styles/Logo.module.css";

const logo = props => {
   return (
      <div className={styles.Logo} style={{height: props.height}}>
         <img src={burgerLogo} alt="" />
      </div>
   );
};

export default logo;
