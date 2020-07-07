import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import styles from "../../../styles/SideDrawer.module.css";

export default function SideDrawer(props) {
   let attachedClasses = [styles.SideDrawer, styles.Close];
   if (props.open) {
      attachedClasses = [styles.SideDrawer, styles.Open];
   }

   return (
      <>
         <Backdrop show={props.open} clicked={props.closed} />
         <div className={attachedClasses.join(" ")}>
            <div className={styles.Logo}>
               <Logo />
            </div>
            <nav>
               <NavigationItems
                  isAuthenticated={props.isAuth}
                  clicked={props.closed}
               />
            </nav>
         </div>
      </>
   );
}
