import React from "react";
import classes from "./Sidebar.module.css";
const Sidebar = (props) => {
  return <aside className={classes.sidebar}>{props.children}</aside>;
};

export default Sidebar;
