import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import './search.css'; // Import the custom CSS file

const Search = () => {
  const location = useLocation();
  const Searchresults = location.state;

  return (
    <div>
      <Navbar />
      <div className="search-container">
        <div className="search-header">
          <h2>Search Results</h2>
        </div>
        {Searchresults && Searchresults.length > 0 ? (
          <div>
            {Searchresults.map((entry, index) => (
              <div key={index} className="search-result">
                <p>Quote: {entry.text}</p>
                <p>Author: {entry.author}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results">No search results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
