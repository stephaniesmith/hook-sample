import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import { HooksReducer, initialState } from './store/hooksState/hooksReducer';
import { success, failure } from './store/actions/actions';

const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0);

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(HooksReducer, initialState);

  const incrementGlobalState = () => {
    setStateGlobal(stateGlobal + 1);
  };

  const decrementGlobalState = () => {
    setStateGlobal(stateGlobal + 1);
  };

  const handleContextDispatchTrue = () => {
    dispatchContextGlobal(success());
  };

  const handleContextDispatchFalse = () => {
    dispatchContextGlobal(failure());
  };

  return (
    <div>
      React
      <Context.Provider
        value={{
          valueGlobalState: stateGlobal,
          addGlobalValue: () => incrementGlobalState(),
          decGlobalValue: () => decrementGlobalState(),

          reducerGlobalState: stateContextGlobal.stateprop2,
          dispatchContextTrue: () => handleContextDispatchTrue(),
          dispatchContextFalse: () => handleContextDispatchFalse()
        }}>
        <Routes />
      </Context.Provider>
    </div>
  );
};

export default App;
