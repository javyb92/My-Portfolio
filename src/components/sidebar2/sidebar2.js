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
                        <img className="logo" src={icon}></img>
                    </Link>
                </li>
                    <li className="nav-item">
                        <Link to="about" className="nav-link" smooth={true} offset={-145} duration={1000}>
                            <i className="fas fa-id-card"></i><span className="link-text"> ABOUT ME</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="portfolio" className="nav-link" smooth={true} offset={-50}  duration={1000}>
                            <i className="fas fa-file-code"></i> <span className="link-text"> PORTFOLIO</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact-me" className="nav-link" smooth={true} duration={1000}>
                            <i className="fas fa-envelope"></i> <span className="link-text"> CONTACT ME</span>
                        </Link>
                    </li>
                    {/* <li class="nav-item">
                        <a href="https://github.com/javyb92" class="nav-link">
                            <i className="fab fa-github-square"></i><span class="link-text"> GITHUB</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.linkedin.com/in/javierabarragan92/" class="nav-link">
                            <i className="fab fa-linkedin"></i><span class="link-text"> LINKEDIN</span>
                        </a>
                    </li> */}
                    <li className="nav-item">
                        <a href="https://drive.google.com/file/d/1xv5GSXcNAs5A7eWuMEvnwZMPBAvodKNE/view?usp=sharing" className="nav-link">
                        <i className="fas fa-journal-whills"></i><span className="link-text"> RESUME</span>
                        </a>
                    </li>
                    <li className="nav-item" id="last">
                    <a href="#" className="nav-link">
                        <i className="fas fa-caret-square-right" id="toggle"></i>
                        <i className="fas fa-caret-square-left" id="toggle2"></i>
                    </a>
                </li>
            </ul>
        </nav>
        
    );
  }


export default Sidebar2;