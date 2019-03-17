import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import { HooksReducer, initialState as initialHooksState } from './store/hooksState/hooksReducer';
import { UserReducer, initialState as initialUserState } from './store/hooksState/userInputHooksReducer'
import { success, failure, user_input_change, user_input_submit } from './store/actions/actions';

const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0);

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(HooksReducer, initialHooksState);
  const [userState, userDispatch] = useReducer(UserReducer, initialUserState);

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

  const handleUseContextChange = ({ target }) => {
    userDispatch(user_input_change(target.value));
  };

  const handleUseContextSubmit = event => {
    event.preventDefault();
    event.persist();

    userDispatch(user_input_submit(event.target.useContext.value));
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
          dispatchContextFalse: () => handleContextDispatchFalse(),

          useContextChange: userState.user_input_change,
          useContextSubmit: userState.user_input_submit,
          useContextHandleChange: event => handleUseContextChange(event),
          useContextHandleSubmit: event => handleUseContextSubmit(event),
        }}>
        <Routes />
      </Context.Provider>
    </div>
  );
};

export default App;
