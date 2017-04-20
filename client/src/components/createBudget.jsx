import React from 'react';
import createBudget from '../helpers/createBudget.js';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

const CreateBudget = (props) => {
  let gas = '0';
  let food = '0';
  let other = '0';
  return (
    <div className="create">
      <h3>Set Initial Values</h3>
      <form>
        <FormGroup controlId ="formControlsGas">
          <ControlLabel>Gas:</ControlLabel>
          <FormControl onChange={e => {
            gas = e.target.value;
          }}/>
        </FormGroup>
        <FormGroup controlId ="formControlsFood">
          <ControlLabel>Food:</ControlLabel>
          <FormControl onChange={e => {
            food = e.target.value;
          }}/>
        </FormGroup>
        <FormGroup controlId ="formControlsOther">
          <ControlLabel>Other:</ControlLabel>
          <FormControl onChange={e => {
            other = e.target.value;
          }}/>
        </FormGroup>
      </form>
      <Button onClick={() => {
        let values = {
          gas: gas,
          food: food,
          other: other
        };
        createBudget(values, props.setAmount);
        props.hide();
      }}>Create</Button>
    </div>
  );
}

export default CreateBudget;