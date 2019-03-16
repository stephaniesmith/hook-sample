import React, { useState, useEffect, useReducer, useContext } from 'react';
import { HooksReducer, initialState } from '../store/hooksState/hooksReducer';
import { success, failure } from '../store/actions/actions';
import Context from '../utils/context';

const HooksContainer1 = () => {
  const context = useContext(Context);

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
      <br/>
      <button onClick={() => changeUseEffectValue()}>CHANGE</button>
      <br/>
      <button onClick={() => handleDispatchTrue()}>Dispatch True</button>
      <button onClick={() => handleDispatchFalse()}>Dispatch False</button>
      <br/>
      <button onClick={() => context.addGlobalValue()}>+1 Global</button>
      <button onClick={() => context.decGlobalValue()}>-1 Global</button>
      <br/>
      <button onClick={() => context.dispatchContextTrue()}>Dispatch True Global</button>
      <button onClick={() => context.dispatchContextFalse()}>Dispatch False Global</button>
      <div>
        {useEffectValue ? <p>{useEffectValue}</p> : <p>No Value</p>}
        {state.stateprop1 ? <p>TRUE</p> : <p>FALSE</p>}
        {context.reducerGlobalState ? <p>TRUE Global</p> : <p>FALSE Global</p>}
        <p>Local State: {stateValue}</p>
        <p>Global State: {context.valueGlobalState}</p>
      </div>
    </div>
  );
};

export default HooksContainer1;
