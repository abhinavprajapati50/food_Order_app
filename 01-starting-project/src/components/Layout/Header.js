import React from "react";
import mealImg from "../../assets/meals.jpg";
// import "./Header.module.css"
import classes from "../Layout/Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";
export const Header = ({ onShowCart}) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShowCart={onShowCart}  />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="" />
      </div>
    </div>
  );
};
