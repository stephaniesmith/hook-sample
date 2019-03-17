import React, { useState, useReducer, useContext } from 'react';
import { user_input_change, user_input_submit } from '../store/actions/actions';
import { UserReducer, initialState } from '../store/hooksState/userInputHooksReducer';
import Context from '../utils/context';

const HooksForm = () => {
  const context = useContext(Context);

  const [valueChange, setValueChange] = useState('start');
  const [valueSubmit, setValueSubmit] = useState('start');

  const [userState, userDispatch] = useReducer(UserReducer, initialState)

  const handleUseStateChange = ({ target }) => {

    setValueChange(target.value);
  };

  const handleUseStateSubmit = event => {
    event.preventDefault();

    setValueSubmit(event.target.useState.value);
  };

  const handleUseReducerChange = ({ target }) => {

    userDispatch(user_input_change(target.value));
  };

  const handleUseReducerSubmit = event => {
    event.preventDefault();

    userDispatch(user_input_submit(event.target.useReducer.value));
  };

  return (
    <div>
      <form onSubmit={handleUseStateSubmit}>
        <label>React useState:</label>
        <input id="useState" type="text" onChange={handleUseStateChange}/>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleUseReducerSubmit}>
        <label>React useReducer:</label>
        <input id="useReducer" type="text" onChange={handleUseReducerChange}/>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={context.useContextHandleSubmit}>
        <label>React useContext:</label>
        <input id="useContext" type="text" onChange={context.useContextHandleChange}/>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>React useState:</h2>
        <p>Change: {valueChange}</p>
        <p>Change: {valueSubmit}</p>
      </div>
      <div>
        <h2>React useReducer:</h2>
        <p>Change: {userState.user_test_change}</p>
        <p>Change: {userState.user_test_submit}</p>
      </div>
      <div>
        <h2>React useContext:</h2>
        <p>Change: {context.useContextChange}</p>
        <p>Change: {context.useContextSubmit}</p>
      </div>
    </div>
  );
};

export default HooksForm;
