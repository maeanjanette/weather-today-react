import Loader from "react-loader-spinner";

import Current from "./Current";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather(props) {
  const weather = props.weatherInfo;
  const forecast = weather.forecast;

  if (weather.isLoaded) {
    return (
      <div className="Weather">
        <Current current={weather.current} />
        <div className="row shadow-sm row-forecast">
          {forecast.map(function (value, index) {
            return (
              <Forecast
                key={index}
                dayInfo={value.forecastDate}
                tempHi={value.forecastHi}
                tempLo={value.forecastLo}
                weather={value.forecastImage}
              />
            );
          })}
        </div>
        <div className="row row-current-location-footer">
          <div className="col-6 col-more-details">
            <a
              href={`https://www.google.com/search?q=${weather.current.city}+weather+now`}
              className="btn btn-link more-details"
              target="_blank"
              rel="noreferrer"
            >
              More details
            </a>
          </div>
          <div className="col-6 col-save-city">
            <button type="button" className="save-city shadow-sm">
              Save City
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <Loader
          className="loader"
          type="Grid"
          color="#ff5151"
          height={50}
          width={50}
        />
      </div>
    );
  }
}
