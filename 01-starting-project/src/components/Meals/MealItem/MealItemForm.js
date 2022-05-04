import React, { useRef, useState } from 'react'
import { Input } from '../../UI/Input';
import classes from "./MealItemForm.module.css";

export const MealItemForm = (props) => {
  const amountInputRef = useRef()
  const [amountIsValid, setamountIsValid] = useState(true)
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount
    console.log(typeof enteredAmountNumber);
    if (enteredAmountNumber.length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setamountIsValid(false)
      return;
    }

    props.onAddToCart(enteredAmountNumber)

  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input label="Amount" input={{
        ref: amountInputRef,
        id: "amount",
        type: "number",
        min: 0,
        max: '5',
        step: 1,
        defaultValue: "1"
      }} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>

  )
}
