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
            <a href="#" class="nav-link">
                <i class="fab fa-accessible-icon"></i><span class="link-text"> ABOUT ME</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">
                <i class="fab fa-accessible-icon"></i><span class="link-text"> PORTFOLIO</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">
                <i class="fab fa-accessible-icon"></i><span class="link-text"> GITHUB</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">
                <i class="fab fa-accessible-icon"></i><span class="link-text"> LINKEDIN</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">
                <i class="fab fa-accessible-icon"></i><span class="link-text"> RESUME</span>
            </a>
        </li>
        <li class="nav-item" id="last">
            <a href="#" class="nav-link" id="toggle">
                <i class="fas fa-caret-square-right"></i>
            </a>
        </li>
    </ul>
</nav>
        
    );
  }


export default Sidebar2;