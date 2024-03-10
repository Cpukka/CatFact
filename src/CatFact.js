import React, { useState } from 'react';
import axios from 'axios';

const CatFact = () => {
  const [catFact, setCatFact] = useState('');

  const fetchCatFact = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setCatFact(response.data.fact);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
    }
  };

  return (
    <div>
      <h1>Cat Fact Generator</h1>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      {catFact && (
        <div>
          <h3>Random Cat Fact:</h3>
          <p>{catFact}</p>
        </div>
      )}
    </div>
  );
};

export default CatFact;
