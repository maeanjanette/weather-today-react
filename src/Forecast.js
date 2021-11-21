import ReactAnimatedWeather from "react-animated-weather";

import "./css/Forecast.css";

export default function Forecast(props) {
  return (
    <div className="col-md col-forecast">
      <div className="card card-forecast">
        <div className="card-body">
          <div className="date-info">{props.dayInfo}</div>
          <span className="icon" id="current-weather-icon">
            <ReactAnimatedWeather
              icon={props.weather}
              color="#a31c88"
              size={40}
              animate={true}
            />
          </span>
          <div className="forecast-hi">
            <span className="temperature">{props.tempHi}</span>{" "}
            <span className="degrees">°</span>
          </div>
          <div className="forecast-lo">
            <span className="temperature">{props.tempLo}</span>{" "}
            <span className="degrees">°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
