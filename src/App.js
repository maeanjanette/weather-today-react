import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import "./css/App.css";

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
