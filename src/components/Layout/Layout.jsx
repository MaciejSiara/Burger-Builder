import React, { Component } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import styles from "../../styles/Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
   state = {
      showSideDrawer: false,
   };

   sideDrawerClosedHandle = () => {
      this.setState(prevState => {
         return { showSideDrawer: !prevState.showSideDrawer };
      });
   };

   render() {
      return (
         <>
            <Toolbar open={this.sideDrawerClosedHandle} />
            <SideDrawer
               closed={this.sideDrawerClosedHandle}
               open={this.state.showSideDrawer}
            />
            <main className={styles.Content}>{this.props.children}</main>
         </>
      );
   }
}

export default Layout;
