import React from "react";
import "../Greeting/style.css";

function Greeting() {
  return (
    <header className="container-fluid col-12" id="greeting">
      <div className="greeting-text">
        <h1>JAVIER A. BARRAGAN</h1>
        <p className="statement">
          I'm a Dallas based Software Developer, with the strongest desire to
          learn and produce.
        </p>
        <div className="social-media">
          <a href="https://github.com/javyb92" className="greeting-link">
            <i className="fab fa-github-square greeting-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/javierabarragan92/"
            className="greeting-link"
          >
            <i className="fab fa-linkedin greeting-icon"></i>
          </a>
          <a
            href="https://www.instagram.com/javyb92/"
            className="greeting-link"
          >
            <i className="fab fa-instagram greeting-icon"></i>
          </a>
        </div>
        <p className="email">
          <strong>Email: </strong> javier.a.barragan92@gmail.com
        </p>
      </div>
    </header>
  );
}
export default Greeting;
