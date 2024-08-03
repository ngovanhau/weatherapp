import React from "react";
import '../App.css';


const RightContainer = ({ weatherData, metric, handleimperial, nhietdo }) => {

  const dailyForecast = [];
  if (weatherData && weatherData.list) {
    const seenDates = new Set();
    
    for (const item of weatherData.list) {
      const date = new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
      
      if (!seenDates.has(date)) {
        dailyForecast.push(item);
        seenDates.add(date);
      }
      if (dailyForecast.length === 5) break;
    }
  }

  return (
    <div className="rightcontainer">
      <div className="headerR">
        <div className="doC" onClick={() =>handleimperial('metric')}>°C</div>
        <div className="doF" onClick={() =>handleimperial('imperial')}>°F</div>
      </div>
      <div className="bodyR">
        <div className="forecast">
          {dailyForecast.map((item, index) => (
            <div className="day" key={index}>
              {new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}<br />
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                style={{ width: '50px', height: '50px' }}
              />
              <span>{Math.round(item.main.temp_min)}{nhietdo()} {Math.round(item.main.temp_max)}{nhietdo()}</span>
            </div>
          ))}
        </div>
        <div className="highlights">
          <div className="text-today-hightlights">Today's Hightlights</div>
          <div className="highlights-top">
            <div className="highlight-item">
              <div>Wind status</div>
              <div className="highlight-value">{weatherData && weatherData.list && weatherData.list[0].wind.speed} mph</div>
              <div className="highlight-sub">WSW</div>
            </div>
            <div className="highlight-item">
              <div>Humidity</div>
              <div className="highlight-value">{weatherData && weatherData.list && weatherData.list[0].main.humidity}%</div>
              <div className="highlight-bar">
                <div className="highlight-bar-inner" style={{ width: `${weatherData && weatherData.list && weatherData.list[0].main.humidity}%` }}></div>
              </div>
            </div>
          </div>
          <div className="highlights-end">
            <div className="highlight-item">
              <div>Visibility</div>
              <div className="highlight-value">{weatherData && weatherData.list && weatherData.list[0].visibility / 1000} miles</div>
            </div>
            <div className="highlight-item">
              <div>Air Pressure</div>
              <div className="highlight-value">{weatherData && weatherData.list && weatherData.list[0].main.pressure} mb</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerR">
        created by Van Hau - devChallenges.io
      </div>
    </div>
  );
};

export default RightContainer;
