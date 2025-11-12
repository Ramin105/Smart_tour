import React from "react";
import "./liveTour.css";
 
import karvansarayImage from "../../assets/baku.jpg";  
import shekiMap from "../../assets/baku.jpg";  
import shekiNature from "../../assets/baku.jpg";  
import shekiPrivate from "../../assets/baku.jpg";
import shekiDayTrip from "../../assets/baku.jpg";
import shekiAdventure from "../../assets/baku.jpg";

 
const LiveTourSlide = ({ image, title, description, duration }) => (
  <div className="live-tour-slide">
    <div className="slide-content">
      <div className="slide-media">
        <img src={image} alt={title} className="slide-image" />
        <button className="mute-button">Mute</button>
      </div>
      <div className="slide-text">
        <h3 className="slide-title">{title}</h3>
        <p className="slide-description">{description}</p>
        <div className="slide-duration">
          <span className="icon">🕒</span> Duration: {duration}
        </div>
      </div>
    </div>
  </div>
);
 

const ExperienceCard = ({ image, title, days, price, rating, reviews }) => (
  <div className="experience-card">
    <div className="card-image-container">
      <img src={image} alt={title} className="card-image" />
      <button className="bookmark-button" aria-label="Kaydet">
        <svg
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V20.5739C19 20.8988 18.6657 21.1197 18.3741 20.9754L12 17.8931L5.62594 20.9754C5.33433 21.1197 5 20.8988 5 20.5739V4Z" />
        </svg>
      </button>
    </div>
    <div className="card-content">
      <h4 className="card-title">{title}</h4>
      <p className="card-details">
        {days} | Starting from {price}
      </p>
      <p className="card-rating">
        <span className="rating-star">★</span> {rating} | {reviews} reviews
      </p>
      <button className="view-details-button">View details</button>
    </div>
  </div>
);
 

const LiveTour = () => {
  const liveTourSlides = [
    {
      title: "Karvansaray",
      description:
        "The house of M.F. Akhundov has been functioning as a museum since 1940. The last repair and restoration work took place in honor of his 200th anniversary in 2011-2012.",
      duration: "2h 30m",
      image: karvansarayImage,
    },
 
  ];

  const popularExperiences = [
    {
      title: "A harmony of nature",
      days: "2 days / 1 night",
      price: "100 azn",
      rating: 4.5,
      reviews: 40,
      image: shekiNature,
    },
    {
      title: "Private Sheki Tour",
      days: "2 days / 1 night",
      price: "100 azn",
      rating: 4.5,
      reviews: 47,
      image: shekiPrivate,
    },
    {
      title: "Shaki Day trip",
      days: "3 days / 2 night",
      price: "80 azn",
      rating: 4.3,
      reviews: 32,
      image: shekiDayTrip,
    },
    {
      title: "Sheki Adventure Nature",
      days: "1 days",
      price: "30 azn",
      rating: 4.5,
      reviews: 36,
      image: shekiAdventure,
    },
  ];

  return (
    <div className="live-tour-page-container"> 
      <div className="page-header-info">
        <h1 className="main-page-title">Live Tour</h1>
        <p className="tour-time-info">From Baku: Sheki Day Tour</p>
        <p className="duration-info">🕒 16h 20m</p>
      </div>
 
      <main className="live-tour-main-section"> 
        <div className="live-tour-content-panel">
          <div className="live-tour-carousel-wrapper">
            <button className="carousel-arrow left-arrow">{"<"}</button>
 
            <LiveTourSlide {...liveTourSlides[0]} image={karvansarayImage} />

            <button className="carousel-arrow right-arrow">{">"}</button>
          </div>
 
          <div className="tour-controls-bar">
            <h3 className="step-counter">Step 3 of 5</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "60%" }}></div>
            </div>
            <div className="control-buttons-group">
              <button className="control-button nav-button next-button">
                Next
              </button>
              <button className="control-button nav-button pause-button">
                Pause
              </button>
              <button className="control-button nav-button restart-button">
                Restart
              </button>
              <button className="control-button nav-button download-button">
                Download
              </button>
            </div>
          </div>
        </div>
 
        <div className="live-tour-map-panel">
          <button className="open-map-button">Open Map</button>
          <div className="map-image-container">
            <img
              src={shekiMap}
              alt="Sheki Tour Map"
              className="tour-map-image"
            />
          </div>
          <p className="map-description">
            Discover the captivating history and culture of Azerbaijan on our
            tour to Sheki. Delve into the architectural wonders of Sheki as our
            knowledgeable guide explains everything.
          </p>
        </div>
      </main>
 
      <section className="popular-experiences-section">
        <div className="popular-experiences-header">
          <h2 className="section-title">
            Popular Experiences near House Museum of Mirza Fatali Akhundzadeh
          </h2>
          <span className="see-all-link">See all</span>
        </div>

        <div className="experiences-grid">
          {popularExperiences.map((exp, index) => (
            <ExperienceCard key={index} image={exp.image} {...exp} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LiveTour;
