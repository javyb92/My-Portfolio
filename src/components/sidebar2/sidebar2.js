import React from "react";
import "./style.css";
import icon from "../../img/icon.png";



function Sidebar2() {
    return (
<nav class="navbar">
    <ul class="navbar-nav">
        <li class="logo">
            <a href="#" class="nav-logo">
                <img class="logo" src={icon}></img>
            </a>
        </li>
        <li class="nav-item">
            <a href="#about" class="nav-link">
                <i className="fas fa-id-card"></i><span class="link-text"> ABOUT ME</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="#portfolio" class="nav-link">
                <i className="fas fa-file-code"></i> <span class="link-text"> PORTFOLIO</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="#portfolio" class="nav-link">
                <i className="fas fa-file-code"></i> <span class="link-text"> CONTACT ME</span>
            </a>
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