import SavedCities from "./SavedCities";
import CurrentCity from "./CurrentCity";

import "./Content.css";

export default function Content() {
  return (
    <div className="Content">
      <div className="row">
        <SavedCities />
        <CurrentCity />
      </div>
    </div>
  );
}
