
import React, { useState } from 'react';
import './../styles/App.css';
<<<<<<< HEAD
import axios from "axios";
=======

>>>>>>> 3bf893c0671f769e6dbffe2291e2282a87a63124

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'edcafbf18f3dce54b025347e734ce2c4';

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError('Unable to fetch weather data. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <input
        type="text"
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && (
        <div className="weather">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.temp}°C</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="weather icon"
          />
        </div>
      )}
    </div>
  );
};

export default App;