import React from 'react';
import Input from './Input';
import classes from './FoodItemForm.module.css';
const FoodItemForm = (props) => {
  return (
    <div>
    <form action="" className={classes.form}>
        <Input label="Amount" input={{
          id:'amount_' + props.id,
          type :'number',
          min: '1',
          max: '6',
          step:'1',
          defaultValue:'1'
        }}/>
        <button> + Add </button>
    </form>
    </div>
  )
}
export default FoodItemForm;