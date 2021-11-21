import ReactAnimatedWeather from "react-animated-weather";

import Search from "./Search.js";
import Forecast from "./Forecast.js";

import "./css/CurrentCity.css";

export default function CurrentCity() {
  return (
    <div className="col-md-9 CurrentCity">
      <Search />
      <div className="current-location">
        <div className="city-name" id="current-city">
          Manila
        </div>
        <div className="date-info" id="date-time-info">
          Sun, November 21 01:00 pm
        </div>
      </div>
      <div className="row current-weather-row">
        <div className="col-9 col-current-weather-info">
          <div className="temperature-info">
            <span className="icon" id="current-weather-icon">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="#ff5151"
                size={50}
                animate={true}
              />
            </span>{" "}
            <h3 className="temperature" id="current-temperature">
              27
            </h3>{" "}
            <span className="temperature-unit">
              <span
                className="unit unit-default unit-selected"
                id="celsius-unit"
              >
                °C
              </span>{" "}
              |{" "}
              <span className="unit unit-default" id="fahrenheit-unit">
                °F
              </span>
            </span>
            <div className="weather" id="current-weather">
              Thunderstorm
            </div>
          </div>
        </div>
        <div className="col-3 col-current-weather-more-info">
          <div className="hi-lo-temperature">
            <span className="value">
              <span className="temperature" id="current-hi">
                29
              </span>
              °
            </span>
            <span className="label"> / </span>
            <span className="value">
              <span className="temperature" id="current-lo">
                28
              </span>
              °
            </span>
          </div>
          <div className="feels-like">
            <span className="label">Feels Like: </span>
            <span className="value">
              <span className="temperature" id="current-feels-like">
                30
              </span>
              °
            </span>
          </div>
          <div className="humidity">
            <span className="label">Humidity: </span>
            <span className="value">
              <span id="current-humidity">96</span>%
            </span>
          </div>
          <div className="wind">
            <span className="label">Wind: </span>
            <span className="value">
              <span id="current-wind">31</span> km/h
            </span>
          </div>
        </div>
      </div>
      <div className="row shadow-sm Forecast">
        <Forecast dayInfo="Mon 11/21" tempHi="29" tempLo="26" weather="SLEET" />
        <Forecast
          dayInfo="Tue 11/22"
          tempHi="30"
          tempLo="27"
          weather="PARTLY_CLOUDY_DAY"
        />
        <Forecast
          dayInfo="Wed 11/23"
          tempHi="28"
          tempLo="27"
          weather="CLOUDY"
        />
        <Forecast dayInfo="Thu 11/24" tempHi="28" tempLo="26" weather="WIND" />
        <Forecast dayInfo="Fri 11/25" tempHi="29" tempLo="25" weather="RAIN" />
      </div>
      <div className="row row-current-location-footer">
        <div className="col-6 col-more-details">
          <button
            href="#"
            className="btn btn-link more-details"
            target="_blank"
          >
            More details
          </button>
        </div>
        <div className="col-6 col-save-city">
          <button type="button" className="save-city shadow-sm">
            Save City
          </button>
        </div>
      </div>
    </div>
  );
}
