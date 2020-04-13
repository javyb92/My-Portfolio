import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css";
import icon from "../../img/icon.png";



function Sidebar2() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <Link to="greeting" className="nav-link" id="logo" smooth={true} duration={1000}>
                        <img className="logo" src={icon} alt="Javier A. Barragan"></img>
                    </Link>
                </li>
                    <li className="nav-item">
                        <Link to="about" className="nav-link" smooth={true} offset={-145} duration={1000}>
                            <i className="fas fa-id-card"></i><span className="link-text"> ABOUT</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="portfolio" className="nav-link" smooth={true} offset={-50}  duration={1000}>
                            <i className="fas fa-file-code"></i> <span className="link-text"> PORTFOLIO</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact-me" className="nav-link" smooth={true} duration={1000}>
                            <i className="fas fa-envelope"></i> <span className="link-text"> CONTACT</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="https://drive.google.com/file/d/1bOasN2mM2-loymUKdK3gKC9cF6naOk5F/view?usp=sharing" className="nav-link">
                        <i className="fas fa-journal-whills"></i><span className="link-text"> RESUME</span>
                        </a>
                    </li>
                    {/* <li className="nav-item" id="last">
                    <a href="#" className="nav-link">
                        <i className="fas fa-caret-square-right" id="toggle"></i>
                        <i className="fas fa-caret-square-left" id="toggle2"></i>
                    </a>
                </li> */}
            </ul>
        </nav>
        
    );
  }


export default Sidebar2;