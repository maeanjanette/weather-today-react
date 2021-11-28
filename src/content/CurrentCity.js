import { useState, useEffect } from "react";
import axios from "axios";

import Weather from "./current-city/Weather";

import "./CurrentCity.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function CurrentCity() {
  const apiKey = "2a6c08410f44ce2149f03a0511abc953";

  let currentWeather = new Map();
  currentWeather.isLoaded = false;

  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(new Map());

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const imageArray = [
    {
      name: "thunderstorm",
      image: "RAIN",
    },
    {
      name: "drizzle",
      image: "RAIN",
    },
    {
      name: "rain",
      image: "RAIN",
    },
    {
      name: "snow",
      image: "SNOW",
    },
    {
      name: "clear",
      image: "CLEAR_DAY",
    },
    {
      name: "clouds",
      image: "CLOUDY",
    },
  ];

  function getImageCode(weatherCategory) {
    let imageCode;

    imageArray.forEach((imageInfo) => {
      if (weatherCategory.toLowerCase() === imageInfo["name"]) {
        imageCode = imageInfo["image"];
      }
    });

    return imageCode;
  }

  function convertAndFormatTime(defaultTime) {
    let hours = defaultTime.getHours();
    let minutes = defaultTime.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
  }

  function formatDateTime(now) {
    let time = convertAndFormatTime(now);

    return `${days[now.getDay()]}, ${
      months[now.getMonth()]
    } ${now.getDate()} ${time}`;
  }

  function computeDateTime(timezone) {
    let now = new Date();

    let nowTimezoneOffset = now.getTimezoneOffset() * 60 * 1000;
    let utcMillis = Date.now();
    let timezoneNow = utcMillis + nowTimezoneOffset + timezone * 1000;

    return formatDateTime(new Date(timezoneNow));
  }

  function handleResponse(response) {
    let dateInfo = computeDateTime(response.data.timezone);
    let imageCode = getImageCode(response.data.weather[0].main);
    let convertedWind = response.data.wind.speed * 3.6;
    currentWeather = {
      city: response.data.name,
      date: dateInfo,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      tempHi: Math.round(response.data.main.temp_max),
      tempLo: Math.round(response.data.main.temp_min),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(convertedWind),
      image: imageCode,
    };

    setWeatherInfo({
      isLoaded: true,
      current: currentWeather,
    });
  }

  function showCurrentWeather(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    const unit = localStorage.getItem("unit")
      ? localStorage.getItem("unit")
      : "metric";

    let geoWeatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;

    axios.get(geoWeatherApi).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const unit = localStorage.getItem("unit")
      ? localStorage.getItem("unit")
      : "metric";

    if (city.length > 0) {
      let formattedCity = city.trim();

      let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&appid=${apiKey}&units=${unit}`;
      axios.get(weatherApi).then(handleResponse);
    } else {
      alert("Please enter a city");
    }
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function locateUser() {
    navigator.geolocation.getCurrentPosition(showCurrentWeather);
  }

  useEffect(() => {
    if (weatherInfo.size === 0) {
      locateUser();
    }
  });

  return (
    <div className="col-md-9 CurrentCity">
      <div className="search">
        <form id="search-city-form" onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            name="search-city"
            placeholder="Search for a city..."
            onChange={handleChange}
            autoComplete="off"
            autoFocus
          />
          <input
            className="btn"
            id="search-icon"
            type="submit"
            value="&#xf002;"
          />
        </form>
        <button
          className="btn"
          id="pin-location-icon"
          type="submit"
          onClick={locateUser}
        >
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </div>
      <Weather weatherInfo={weatherInfo} />
    </div>
  );
}
