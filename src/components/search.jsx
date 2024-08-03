import React, { useState } from 'react';
import '../styles/searchoverlay.css';

const SearchOverlayComponent = ({ onClose, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
    onClose(); // Đóng lớp phủ sau khi tìm kiếm
  };

  return (
    <div className='overlay'>
      <div className='overlay-content'>
        <button className='close-btn' onClick={onClose}>X</button>
        <div className='text-btn-search'>
          <input
            type='text'
            placeholder='Search location'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='search-btn' onClick={handleSearch}>Search</button>
        </div>
        
        <ul>
          <li onClick={() => onSearch('London')}>London</li>
          <li onClick={() => onSearch('Barcelona')}>Barcelona</li>
          <li onClick={() => onSearch('Long Beach')}>Long Beach</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchOverlayComponent;
