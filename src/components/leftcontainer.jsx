import React from 'react';
import '../App.css';
import { Icons } from '../assets';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SearchOverlayComponent from './search';

const LeftContainer = ({ data, currentDate, location, showOverlay, setShowOverlay, handleLocationClick, handleSearch, nhietdo }) => {
  return (
    <div className='leftcontainer'>
      <div className='search'>
        <button className='btnsearch' onClick={() => setShowOverlay(true)}>Search for places</button>
        <button className='btn-mapnow' onClick={handleLocationClick}>
          <i className="fas fa-crosshairs"></i>
        </button>
      </div>

      <div className='background-cloud-body'>
        <img src={Icons.cloud} className='background-image' alt='Cloud background' />
        {data && data.list && data.list[0] && (
          <img
            src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
            className='background-image-lightCloud'
            alt={data.list[0].weather[0].description}
          />
        )}
      </div>

      <div className='weather-info'>
        {data && data.list && data.list[0] && (
          <>
            <div className='temperature'>
              {Math.round(data.list[0].main.temp)}{nhietdo()}
            </div>
            <div className='description'>
              {data.list[0].weather[0].description}
            </div>
            <div className='datetime'>
              {currentDate}
            </div>
            <div className='location'>
              <i className="fas fa-map-marker-alt"></i>
              {data.city.name}, {data.city.country}
            </div>
          </>
        )}
      </div>

      {showOverlay && (
        <SearchOverlayComponent
          onClose={() => setShowOverlay(false)}
          onSearch={handleSearch}
        />
      )}
    </div>
  );
};

export default LeftContainer;
