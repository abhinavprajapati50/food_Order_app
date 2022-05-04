import React, { forwardRef } from "react";
import classes from "./Input.module.css";

export const Input =(props, ref) => {
  console.log(ref);
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref}  {...props.input} />
    </div>
  );
};
