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
        <a
          href={`https://www.google.com/search?q=${weather.current.city}+weather+now`}
          className="more-details"
          target="_blank"
          rel="noreferrer"
        >
          More details
        </a>
      </div>
    );
  } else {
    return (
      <div className="Weather weather-loader">
        <Loader
          className="loader"
          type="Plane"
          color="#a31c88"
          secondaryColor="#ff5151"
        />
      </div>
    );
  }
}
