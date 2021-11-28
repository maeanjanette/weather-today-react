import "./SavedCities.css";

export default function SavedCities() {
  return (
    <div className="col-md-3 SavedCities">
      <span className="label">Saved Cities</span>
      <div id="saved-cities">
        <template id="saved-city-template">
          <div className="card card-saved-weather-info shadow-sm">
            <div className="card-body saved-city">
              <div className="card-title temperature-title">
                <img src="../img/sunny.svg" alt="sunny" className="icon" />
                <span className="temperature">0</span>
                <span className="degrees">°</span>
                <span className="float-end close">✕</span>
              </div>
              <div className="card-subtitle city-name">City Name</div>
              <div className="card-text weather">Weather Description</div>
            </div>
          </div>
        </template>
      </div>
    </div>
  );
}
