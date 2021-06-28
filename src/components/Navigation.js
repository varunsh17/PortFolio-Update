import React from 'react'
import "./nav.css"
function Navigation() {
    return (
        <div className="navall">
        <nav>
        <div className="navbar">
            <div className="logo"><a href="#home">Portfolio</a></div>
            <ul className="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <div className="cancel-btn">
        <i class="fa fa-times" aria-hidden="true"></i>
        </div>
            </ul>
            <div className="media-icons">
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>

            </div>
        </div>
        <div className="menu-btn">
        <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
            
        </nav>
        
        </div>
    )
}

export default Navigation
