import React, { useState, useEffect, useReducer } from 'react';
import { HooksReducer, initialState } from '../store/hooksState/hooksReducer';
import { success, failure } from '../store/actions/actions';

const HooksContainer1 = () => {

  const [stateValue, setValue] = useState(0);
  const [useEffectValue, setUseEffectValue] = useState(null);

  const [state, dispatch] = useReducer(HooksReducer, initialState);

  useEffect(() => {
    setTimeout(() => setUseEffectValue('use effect work'), 3000);
  }, [stateValue]);

  const incrementValue = () => {
    setValue(stateValue + 1);
  };

  const decrementValue = () => {
    setValue(stateValue + 1);
  };

  const changeUseEffectValue = () => {
    setUseEffectValue('Some string');
  };

  const handleDispatchTrue = () => {
    dispatch(success());
  };

  const handleDispatchFalse = () => {
    dispatch(failure());
  };

  return (
    <div>
      React Hooks
      <br/>
      <button onClick={() => incrementValue()}>+1</button>
      <button onClick={() => decrementValue()}>-1</button>
      <button onClick={() => changeUseEffectValue()}>CHANGE</button>
      <button onClick={() => handleDispatchTrue()}>Dispatch True</button>
      <button onClick={() => handleDispatchFalse()}>Dispatch False</button>
      <div>
        {useEffectValue ? <p>{useEffectValue}</p> : <p>No Value</p>}
        {state.stateprop1 ? <p>TRUE</p> : <p>FALSE</p>}
        <p>Local State: {stateValue}</p>
      </div>
    </div>
  );
};

export default HooksContainer1;
