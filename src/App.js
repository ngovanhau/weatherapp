import React, { useEffect, useState} from 'react';
import './App.css';
import Leftcontainer from './components/leftcontainer';
import Rightcontainer from './components/rightcontainer';
import { getWeatherForecast } from './service/api';
import { getCurrentLocation } from './service/apilocation';

function App() {
  const [data, setData] = useState(null);
  const [currentDate, setCurrentDate] = useState('');
  const [location, setLocation] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [metric, setmetric] = useState('metric');
  useEffect(() => {
    getCurrentLocation()
      .then(city => {
        setLocation(city);
      })
      .catch(error => console.error('Error fetching location:', error));
  }, []);

  useEffect(() => {
    if (location) {
      getWeatherForecast(location, metric)
        .then(data => setData(data))
        .catch(error => console.error('Error fetching weather data:', error));
    }

    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, [location, metric]);

  const handleLocationClick = () => {
    getCurrentLocation()
      .then(city => {
        setLocation(city);
      })
      .catch(error => console.error('Error fetching location:', error));
  };

  const handleSearch = (city) => {
    setLocation(city);
    setShowOverlay(false); // ẩn lớp phủ sau khi chọn địa điểm
  };
  const handleimperial =(imperial) =>{
    setmetric(imperial);
    console.log(imperial)
  };
  const nhietdo =()=>{
    return metric === 'metric'? '°C': '°F';
  }
  return (
    <div className="Container">
      <Leftcontainer 
        data={data} 
        currentDate={currentDate} 
        location={location} 
        showOverlay={showOverlay} 
        setShowOverlay={setShowOverlay}
        handleLocationClick={handleLocationClick}
        handleSearch={handleSearch}
        nhietdo = {nhietdo}
      />
      <Rightcontainer 
        weatherData={data}
        metric={metric}
        handleimperial ={handleimperial} 
        nhietdo ={nhietdo}
      />
    </div>
  );
}

export default App;
