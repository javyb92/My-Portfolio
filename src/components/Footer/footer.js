import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="container col-12">
            <div className="content">
                <h5>Design by Javier A. Barragan</h5>
                <div className="social-media">
                    <a href="https://github.com/javyb92" className="footer-link">
                        <i className="fab fa-github-square footer-icon"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/javierabarragan92/" className="footer-link">
                        <i className="fab fa-linkedin footer-icon"></i>
                    </a>
                    <a href="https://www.instagram.com/javyb92/" className="footer-link">
                        <i className="fab fa-instagram footer-icon"></i>
                    </a>
                </div>
            </div>
        </footer>
        );
    };
export default Footer;