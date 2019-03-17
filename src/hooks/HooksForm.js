import React, { useState, useReducer, useContext } from 'react';

const HooksForm = () => {
  const [valueChange, setValueChange] = useState('start');
  const [valueSubmit, setValueSubmit] = useState('start');

  const handleUseStateChange = ({ target }) => {

    setValueChange(target.value);
  };

  const handleUseStateSubmit = event => {
    event.preventDefault();

    setValueSubmit(event.target.useState.value);
  };

  return (
    <div>
      <form onSubmit={handleUseStateSubmit}>
        <label>React useState:</label>
        <input id="useState" type="text" onChange={handleUseStateChange}/>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>React useState:</h2>
        <p>Change: {valueChange}</p>
        <p>Change: {valueSubmit}</p>
      </div>
    </div>
  );
};

export default HooksForm;
