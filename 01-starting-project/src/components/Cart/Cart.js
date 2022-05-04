import React from 'react'
import { Modal } from '../UI/Modal';
import classes from "./Cart.module.css";
export const Cart = ({ hideCartHandler}) => {
    const cartItems = (<ul className={classes['cart-items']} >{[{
        id: "1",
        name: "mobile",
        amount: 2,
        price: 12.99,
    }].map((curItem) => <li key={curItem.id}>{curItem.id}</li>)}
    </ul>)
    return (
        <>
            <Modal>

                {cartItems}
                <div className={classes.total}>
                    <span>Totala Amount</span>
                    <span>35</span>
                </div>

                <div className={classes.actions} >
                    <button className={classes['button--alt']} onClick={hideCartHandler}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </Modal>
        </>
    )
}
