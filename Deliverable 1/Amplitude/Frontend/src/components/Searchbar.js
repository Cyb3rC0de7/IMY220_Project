import React from 'react';
import '../styles/Searchbar.css';

const Searchbar = () => {
    const handleSearch = (event) => {
        // Handle search logic here
    };

    return (
        <div className='search-bar'>
            <input type="text" placeholder="Search..." onChange={handleSearch} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Searchbar;