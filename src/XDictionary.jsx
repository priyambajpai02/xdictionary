import React, { useState } from 'react';
import './XDictionary.css';

const XDictionary = () => {
  // Initial dictionary state
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  // State for the search term and search result
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');

  // Handle search action
  const handleSearch = () => {
    const result = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
    if (result) {
      setDefinition(result.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div>
        <input 
          type="text" 
          placeholder="Search for a word..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <h2>Definition:</h2>
      <p>{definition}</p>
    </div>
  );
};

export default XDictionary;
