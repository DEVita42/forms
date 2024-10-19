import React, { useState } from 'react';
import { Welcome } from './Welcome'; 

function InteractiveWelcome() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={handleNameChange} 
        placeholder="Enter your name" 
      />

      <input 
        type="number" 
        value={age} 
        onChange={handleAgeChange} 
        placeholder="Enter your age" 
        style={{ marginLeft: '10px' }} 
      />

      <Welcome name={name} age={age} />
    </div>
  );
}

export default InteractiveWelcome;
