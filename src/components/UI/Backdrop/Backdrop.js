import React from "react";
import classes from "./Backdrop.module.scss";

const backdrop = props =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null; //It's cool to return null from a component

export default backdrop;
