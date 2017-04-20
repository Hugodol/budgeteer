import React from 'react';
import addExpense from '../helpers/addExpense.js';
import getNewAmount from '../helpers/getNewAmount.js';

const UpdateGas = (props) => (
  <div>
    <h2>Gas: ${props.amount} left</h2>
    <input onKeyUp={event => {
        if (event.keyCode === 13) {
          let amount = props.amount;
          let newExpense = event.target.value;
          let value = getNewAmount('gas', amount, newExpense);
          addExpense(value, props.setAmount);
          event.target.value = '';
        }
      }
    }/>
  </div>
);

export default UpdateGas;