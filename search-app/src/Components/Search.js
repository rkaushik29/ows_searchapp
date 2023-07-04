import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target
    setQuery(value.toString());
  };

  const handleSearch = () => {
    fetch(`http://localhost:8000/search?q=${query}`)
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
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default Search;
