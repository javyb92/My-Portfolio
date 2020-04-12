import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css";
import icon from "../../img/icon.png";



function Sidebar2() {
    return (
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="logo">
                    <Link to="greeting" class="nav-link" id="logo" smooth={true} duration={1000}>
                        <img class="logo" src={icon}></img>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="about" class="nav-link" smooth={true} offset={-145} duration={1000}>
                        <i className="fas fa-id-card"></i><span class="link-text"> ABOUT ME</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="portfolio" class="nav-link" smooth={true} offset={-50}  duration={1000}>
                        <i className="fas fa-file-code"></i> <span class="link-text"> PORTFOLIO</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="contact-me" class="nav-link" smooth={true} duration={1000}>
                        <i class="fas fa-envelope"></i> <span class="link-text"> CONTACT ME</span>
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
                <li class="nav-item">
                    <a href="https://drive.google.com/file/d/1xv5GSXcNAs5A7eWuMEvnwZMPBAvodKNE/view?usp=sharing" class="nav-link">
                    <i className="fas fa-journal-whills"></i><span class="link-text"> RESUME</span>
                    </a>
                </li>
                <li class="nav-item" id="last">
                    <a href="#" class="nav-link">
                        <i class="fas fa-caret-square-right" id="toggle"></i>
                        <i class="fas fa-caret-square-left" id="toggle2"></i>
                    </a>
                </li>
            </ul>
        </nav>
        
    );
  }


export default Sidebar2;