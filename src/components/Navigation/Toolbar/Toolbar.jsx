import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle";
import styles from "../../../styles/Toolbar.module.css";

const toolbar = props => {
    console.log(props.isAuth);
    
   return (
      <header className={styles.Toolbar}>
         <DrawerToggle click={props.open} />
         <div className={styles.Logo}>
            <Logo />
         </div>
         <nav className={styles.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
         </nav>
      </header>
   );
};

export default toolbar;
