import "./css/Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-city-form">
        <input
          id="search"
          type="text"
          name="search-city"
          placeholder="Search for a city..."
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
      <button className="btn" id="pin-location-icon" type="submit">
        <i className="fas fa-map-marker-alt"></i>
      </button>
    </div>
  );
}
