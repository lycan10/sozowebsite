import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo/sozo-header-logo.png"
import { PiDownloadFill } from "react-icons/pi";

const Navbar = () => {
    const navigateToHome = () => {
        // Use the URL of the page you want to navigate to
        const newUrl = "/";
    
        if (window.location.pathname === newUrl) {
          window.location.reload();
        } else {
          window.location.href = newUrl;
        }
      };
  return (
    <div className='navbar'>
        <div className="navbar-container">
            <div className="navbar-left">
                <p>Communities</p>
                <p>Features</p>
                <p>Impacts</p>
            </div>
            <div className="navbar-logo">
            <img src={logo} alt="Sozo-logo" onClick={navigateToHome} />
            
            </div>
            <div className="navbar-right">
            <p>About</p>
                <p>Career</p>
                <p>News Room</p>
                <div className="navbar-right-button">
    <p>Get App</p>
    <PiDownloadFill />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar