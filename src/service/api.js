import axios from 'axios';

export async function getWeatherForecast(cityName, unit) {
    const apiKey = '5caf59265a678ca70e57d4763ad8ddcc';
    const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=${cityName}&units=${unit}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  