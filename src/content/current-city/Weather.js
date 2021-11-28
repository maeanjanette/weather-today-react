import Loader from "react-loader-spinner";

import Current from "./Current";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather(props) {
  const weather = props.weatherInfo;

  if (weather.isLoaded) {
    return (
      <div className="Weather">
        <Current current={weather.current} />
        <div className="row shadow-sm row-forecast">
          <Forecast
            dayInfo="Mon 11/21"
            tempHi="29"
            tempLo="26"
            weather="SLEET"
          />
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
          <Forecast
            dayInfo="Thu 11/24"
            tempHi="28"
            tempLo="26"
            weather="WIND"
          />
          <Forecast
            dayInfo="Fri 11/25"
            tempHi="29"
            tempLo="25"
            weather="RAIN"
          />
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
