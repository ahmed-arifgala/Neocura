import React from "react";
import Toolbar from "../../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Layout/Footer/Footer";

const Layout = () => {
  const location = useLocation();
  return !location.pathname.includes("/dashboard") ? (
    <>
      <div className={classes.Toolbar}>
        <Toolbar />
      </div>

      <div className={classes.Outlet}>
        <Outlet />
      </div>
      <Footer />
    </>
  ) : (
    <>
      <div className={classes.Outlet}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
