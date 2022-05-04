import React, { useContext } from 'react'
import { CartContext } from '../../Store/CartContext';
import { CartIcon } from '../Cart/CartIcon';
import classes from "./HeaderCartButton.module.css";
export const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext)
  console.log(cartCtx);
  const numberOfCartItems = cartCtx.items.reduce((acc, cur) => { acc + cur.amount }, 0)
  console.log(numberOfCartItems);

  return (
    <div >
      <button className={classes.button} onClick={onShowCart}>
        <span className={classes.icon}><CartIcon /></span>
        <span> Your Cart </span>
        <span className={classes.badge}>  {numberOfCartItems} </span>
      </button>

    </div>
  )
}
