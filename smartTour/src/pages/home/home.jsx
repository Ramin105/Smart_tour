import React from "react";
import { useNavigate } from "react-router-dom";  
import "./home.css";

import logo from "../../assets/logo.png";
import arxaFonSekli from "../../assets/Şuşa_qalası.jpg";

function HomePage() {
  const navigate = useNavigate();  

  const handleStartJourney = () => {
    navigate("/login");  
  };

  return (
    <div
      className="homepage-container"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
          url(${arxaFonSekli})
        `,
      }}
    >
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="SmartTour Logo" />
          <span>SmartTour</span>
        </div>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#help">Help</a>
        </div>
        <div className="navbar-lang">
          <button className="lang-button">
            Eng <span>&#9662;</span>
          </button>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-box">
          <h1>SmartTour: The Future of Travel in Azerbaijan</h1>
          <p>Choose, Click and relax</p> 
          <button className="cta-button" onClick={handleStartJourney}>
            Start your journey
          </button>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
