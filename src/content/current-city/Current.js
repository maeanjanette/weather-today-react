import { useEffect } from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Current.css";

export default function Current(props) {
  const weather = props.current;

  function toFahrenheit(temp) {
    return Math.round((temp * 9) / 5 + 32);
  }

  function toCelsius(temp) {
    return Math.round(((temp - 32) * 5) / 9);
  }

  function formatUnit() {
    let fahrenheit = document.querySelector("#fahrenheit-unit");
    let celsius = document.querySelector("#celsius-unit");
    fahrenheit.classList.toggle("unit-selected");
    celsius.classList.toggle("unit-selected");
  }

  function convertTemp(event) {
    if (event.target.classList.contains("unit-selected")) {
      return false;
    }

    let eventUnit = event.target.innerHTML;
    let temperatures = document.querySelectorAll(".temperature");
    temperatures.forEach((temp) => {
      if (eventUnit === "°C") {
        localStorage.setItem("unit", "metric");
        temp.innerHTML = toCelsius(temp.innerHTML);
      } else {
        localStorage.setItem("unit", "imperial");
        temp.innerHTML = toFahrenheit(temp.innerHTML);
      }
    });

    formatUnit(event);
  }

  useEffect(() => {
    let celsius = document.querySelector("#celsius-unit");
    let fahrenheit = document.querySelector("#fahrenheit-unit");
    if (localStorage.getItem("unit") === "metric") {
      celsius.classList.add("unit-selected");
      fahrenheit.classList.remove("unit-selected");
    } else {
      fahrenheit.classList.add("unit-selected");
      celsius.classList.remove("unit-selected");
    }
  });

  return (
    <div className="Current">
      <div className="current-location">
        <div className="city-name" id="current-city">
          {weather.city}
        </div>
        <div className="date-info" id="date-time-info">
          {weather.date}
        </div>
      </div>
      <div className="row current-weather-row">
        <div className="col-9 col-current-weather-info">
          <div className="temperature-info">
            <span className="icon" id="current-weather-icon">
              <ReactAnimatedWeather
                icon={weather.image}
                color="#ff5151"
                size={50}
                animate={true}
              />
            </span>{" "}
            <h3 className="temperature" id="current-temperature">
              {weather.temperature}
            </h3>{" "}
            <span className="temperature-unit">
              <span
                className="unit unit-default"
                id="celsius-unit"
                onClick={convertTemp}
              >
                °C
              </span>{" "}
              |{" "}
              <span
                className="unit unit-default"
                id="fahrenheit-unit"
                onClick={convertTemp}
              >
                °F
              </span>
            </span>
            <div
              className="weather"
              id="current-weather"
              style={{ textTransform: "capitalize" }}
            >
              {weather.description}
            </div>
          </div>
        </div>
        <div className="col-3 col-current-weather-more-info">
          <div className="hi-lo-temperature">
            <span className="value">
              <span className="temperature" id="current-hi">
                {weather.tempHi}
              </span>
              °
            </span>
            <span className="label"> / </span>
            <span className="value">
              <span className="temperature" id="current-lo">
                {weather.tempLo}
              </span>
              °
            </span>
          </div>
          <div className="feels-like">
            <span className="label">Feels Like: </span>
            <span className="value">
              <span className="temperature" id="current-feels-like">
                {weather.feelsLike}
              </span>
              °
            </span>
          </div>
          <div className="humidity">
            <span className="label">Humidity: </span>
            <span className="value">
              <span id="current-humidity">{weather.humidity}</span>%
            </span>
          </div>
          <div className="wind">
            <span className="label">Wind: </span>
            <span className="value">
              <span id="current-wind">{weather.wind}</span> km/h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
