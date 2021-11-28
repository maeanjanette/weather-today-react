import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-lg">
        <div className="weather-container shadow">
          <Header />
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
}
