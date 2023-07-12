import React, { useState } from 'react';

function Search() {
  // React hooks
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target
    setQuery(value.toString());
  };

  // OWS API call
  const handleSearch = () => {
    fetch(`http://localhost:8000/search?q=${query}`)    // Change this to the server address where the API is running
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="search-container">
        <input type="text" value={query} onChange={handleInputChange} className="text-input"/>
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      {
        <ul className="results-list">
          {results.map((result, index) => (
            <li key={index}>
              <a href={result.fields[0].charSequenceValue} className="link">{result.fields[0].charSequenceValue}</a>
              <div className='centered-text'>{result.fields[0].text}</div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default Search;
