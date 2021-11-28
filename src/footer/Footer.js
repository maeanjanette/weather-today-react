import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <span className="created-by">
        <a
          href="https://github.com/maeanjanette/weather-today-react"
          title="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          Open Source Code{" "}
        </a>
        by Anj Docena
      </span>
      <i className="fas fa-bolt bolt-icon"></i>
    </div>
  );
}
