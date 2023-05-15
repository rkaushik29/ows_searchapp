import { useState } from 'react';
import { search } from 'lucene';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
  
    const handleSearch = () => {
    //   const indexPath = '../../cranfield';
    //   const queryString = query;
  
    //   const results = search(indexPath, queryString);
  
    //   setResults(results);
    };
  
    return (
      <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        <ul>
            {results}
          {/* {results.map((result) => (
            <li key={result.id}>
              <h2>{result.title}</h2>
              <p>{result.content}</p>
              <a href={result.url}>View Document</a>
            </li>
          ))} */}
        </ul>
      </div>
    );
}

export default Search;