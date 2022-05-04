import React, { useReducer } from 'react'
import { CartContext } from './CartContext'


const defaultCartState = {
    items: [],
    totalAmount:0,
}

const cartReducer = (state, action) => {
    if (action.type ==="ADD") {
        const updatedItems = state.items.concat(action.item)
        console.log(updatedItems);
        const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price
        console.log(updatedTotalAmount);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

export const CartContext__Provider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type:"ADD", item:item})
    }
    const removeItemToCartHandler = (id) => {
        dispatchCartAction({type:"REMOVE", id:id})
    }
    const cartContext = {
        items: cartState.items,
        totalItems: cartState.totalAmount,
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
