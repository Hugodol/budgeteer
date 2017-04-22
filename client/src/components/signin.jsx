import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';


const SignIn = (props) => {
  let userName = '';
  let createName = '';
  return (
    <div className="create">
      <form>
        <FormGroup controlId ="formControlsSignIn">
          <ControlLabel>Sign In:</ControlLabel>
          <FormControl
            onChange={e => {
              userName = e.target.value;
            }}
            onKeyUp={e => {
              if (e.keyCode === 13) {
                // check to see if user is in db
                props.setUsername(userName);
                // redirect to main page
              }
            }}
          />
        </FormGroup>
        <div>OR</div>
        <FormGroup controlId ="formControlsCreateUser">
          <ControlLabel>Create User:</ControlLabel>
          <FormControl
            onChange={e => {
              createName = e.target.value;
            }}
            onKeyUp={e => {
              if (e.keyCode === 13) {
                // post username to db
                props.setUsername(createName);
                //redirect to main page
              }
            }}
          />
        </FormGroup>
      </form>
    </div>
  )
}

export default SignIn;