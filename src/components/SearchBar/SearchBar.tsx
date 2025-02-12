import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // Handle close search
  const closeSearch = () => {
    setSearchText('');
  };

  // Handle form submission (prevents page reload)
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Optionally handle search logic here
    console.log('Searching for:', searchText);
  };

  return (
    <div className="search_input" id="search_input_box">
      <div className="container">
        <form className="d-flex justify-content-between search-inner" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="form-control"
            id="search_input"
            placeholder="Search Here"
            value={searchText}
            onChange={handleSearchChange}
          />
          <button type="submit" className="btn" aria-label="Search">
            <i className="ti-search"></i>
          </button>
          <span
            className="ti-close"
            id="close_search"
            title="Close Search"
            onClick={closeSearch}
            aria-label="Close Search"
          ></span>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
