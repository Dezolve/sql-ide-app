// EnvironmentSelector.js
import React, { useState } from 'react';

function EnvironmentSelector({ onEnvironmentChange }) {
  const [environment, setEnvironment] = useState('DEV');

  const handleChange = (e) => {
    setEnvironment(e.target.value);
    onEnvironmentChange(e.target.value);
  };

  return (
    <select value={environment} onChange={handleChange}>
      <option value="DEV">DEV</option>
      <option value="TEST">TEST</option>
      <option value="PRD">PRD</option>
    </select>
  );
}

export default EnvironmentSelector;
