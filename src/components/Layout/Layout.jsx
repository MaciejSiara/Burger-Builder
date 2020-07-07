import React, { Component } from "react";
import { connect } from "react-redux";
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
            <Toolbar
               open={this.sideDrawerClosedHandle}
               isAuth={this.props.isAuthenticated}
            />
            <SideDrawer
               closed={this.sideDrawerClosedHandle}
               open={this.state.showSideDrawer}
               isAuth={this.props.isAuthenticated}
            />
            <main className={styles.Content}>{this.props.children}</main>
         </>
      );
   }
}

const mapStateToProps = state => {
   return {
      isAuthenticated: state.auth.idToken !== null,
   };
};

export default connect(mapStateToProps, null)(Layout);
