import React, { useState, useEffect } from 'react';

const HooksContainer1 = () => {

  const [stateValue, setValue] = useState(0);
  const [useEffectValue, setUseEffectValue] = useState(null);

  useEffect(() => {
    setTimeout(() => setUseEffectValue('use effect work'), 3000);
  });

  const incrementValue = () => {
    setValue(stateValue + 1);
  };

  const decrementValue = () => {
    setValue(stateValue + 1);
  };

  return (
    <div>
      React Hooks
      <br/>
      <button onClick={() => incrementValue()}>+1</button>
      <button onClick={() => decrementValue()}>-1</button>
      <div>
        <p>{useEffectValue ? <p>{useEffectValue}</p> : <p>No Value</p>}</p>
        <p>Local State: {stateValue}</p>
      </div>
    </div>
  );
};

export default HooksContainer1;
