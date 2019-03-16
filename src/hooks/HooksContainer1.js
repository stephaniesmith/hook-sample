import React, { useState, useEffect } from 'react';

const HooksContainer1 = () => {

  const [stateValue, setValue] = useState(0);
  const [useEffectValue, setUseEffectValue] = useState(null);

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

  return (
    <div>
      React Hooks
      <br/>
      <button onClick={() => incrementValue()}>+1</button>
      <button onClick={() => decrementValue()}>-1</button>
      <button onClick={() => changeUseEffectValue()}>CHANGE</button>
      <div>
        {useEffectValue ? <p>{useEffectValue}</p> : <p>No Value</p>}
        <p>Local State: {stateValue}</p>
      </div>
    </div>
  );
};

export default HooksContainer1;
