import "./css/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <span className="created-by">
        <a
          href="https://github.com/maeanjanette/weather-today"
          title="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          Open Source Code{" "}
        </a>
        by Anj Docena
      </span>
      <i className="fas fa-bolt bolt-icon"></i>
      <span className="icons-attribute">
        Icons made by{" "}
        <a
          href="https://www.freepik.com"
          title="Freepik"
          target="_blank"
          rel="noreferrer"
        >
          Freepik{" "}
        </a>
        from{" "}
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="noreferrer"
        >
          www.flaticon.com
        </a>
      </span>
    </div>
  );
}
