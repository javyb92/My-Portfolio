import React from "react";
import "../../Pages/style.css"
import icon from "../../img/icon.png"



function Sidebar() {
    return (
        <nav className="nav col-lg-2 align-items-start align-items-center flex-column" id="sidenav">
          <div className="sidebar-header">
            <a className="navbar-brand" href="/">
              <img src={icon} width="175" height="175" alt="Javier Barragan" />
            </a>
            <h5>JAVIER BARRAGAN</h5>
          </div>
            <a className="nav-link" href="/About"><i className="fas fa-id-card"></i> ABOUT ME</a>
            <a className="nav-link" href="/portfolio"><i className="fas fa-file-code"></i> PORTFOLIO</a>
            <a className="nav-link" href="https://github.com/javyb92"><i className="fab fa-github-square"></i> GITHUB</a>
            <a className="nav-link" href="https://www.linkedin.com/in/javierabarragan92/"><i className="fab fa-linkedin"></i> LINKEDIN</a>
            <a className="nav-link" href="https://drive.google.com/file/d/1jlQPVFSjeCam9_yOl0QTiixDw4mnPm6H/view?usp=sharing"><i className="fas fa-journal-whills"></i> RESUME</a>
          <footer>
              <p>© Copyright 2020 Javier A. Barragan</p>
          </footer>
        </nav>
        
    );
  }


export default Sidebar;
