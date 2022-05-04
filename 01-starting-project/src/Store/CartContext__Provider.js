import React from 'react'
import { CartContext } from './CartContext'

export const CartContext__Provider = (props) => {

    const addItemToCartHandler = () =>  {}
    const removeItemToCartHandler = () =>  {}
    const cartContext = {
        items: [],
        totalItems: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        
    }
  return (
      <div>
          <CartContext.Provider value={cartContext}>
              {props.children}
          </CartContext.Provider>
    </div>
  )
}
