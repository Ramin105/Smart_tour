import React, { useState } from "react";
import "./customizeTour.css";
import amusementParkImg from "../../assets/amusementPark.jpg";
import historicalImg from "../../assets/historical.jpg";
import villageImg from "../../assets/village.jpg";
import divingImg from "../../assets/diving.jpg";
import horseRidingImg from "../../assets/horseRiding.jpg";
import waterSafariImg from "../../assets/waterSafari.jpg";
import campingImg from "../../assets/camping.jpg";
import parachuteImg from "../../assets/parachute.jpg";
import seaTripImg from "../../assets/seaTrip.jpg";
const vocationTypes = [
  { id: 1, name: "Amusement park", imageUrl: amusementParkImg },
  { id: 2, name: "Historical", imageUrl: historicalImg },
  { id: 3, name: "Village Tour", imageUrl: villageImg },
  { id: 4, name: "Diving", imageUrl: divingImg },
  { id: 5, name: "Horse riding", imageUrl: horseRidingImg },
  { id: 6, name: "Water Safari", imageUrl: waterSafariImg },
  { id: 7, name: "Camping", imageUrl: campingImg },
  { id: 8, name: "Parachute", imageUrl: parachuteImg },
  { id: 9, name: "Sea trip", imageUrl: seaTripImg },
];

const VocationCard = ({ name, imageUrl }) => {
  return (
    <div
      className="vocation-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="vocation-checkbox">
        <input
          type="checkbox"
          id={`vocation-${name}`}
          name={name}
          style={{ display: "none" }}
        />
        <label htmlFor={`vocation-${name}`} className="checkbox-icon">
          &#9744;
        </label>
      </div>

      <span className="vocation-name">{name}</span>
    </div>
  );
};

const VocationTypesSection = () => {
  return (
    <div className="vocation-section-container">
      <div className="vocation-header">
        <h2 className="vocation-title">Vocation type</h2>
        <a href="/see-all" className="see-all-link">
          See all <span className="arrow-icon">{">"}</span>
        </a>
      </div>

      <div className="vocation-cards-grid">
        {vocationTypes.map((type) => (
          <VocationCard
            key={type.id}
            name={type.name}
            imageUrl={type.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

const CustomizeTour = () => {
 const min = 50;
 const max = 1000;
 const DEFAULT_VALUE = 250;
 const [budget, setBudget] = useState(DEFAULT_VALUE);

 const [comfort, setComfort] = useState('Premium');
 const [startDate, setStartDate] = useState('');
 const [endDate, setEndDate] = useState('');
 const [selectedMonth, setSelectedMonth] = useState('');
 
 const handleSliderChange = (event) => {
  setBudget(event.target.value);
 };
 
 const handleShowTour = () => {
  console.log("Filters Applied!");
 };
 
 const handleResetFilters = () => {
 setBudget(DEFAULT_VALUE);
 setComfort('Premium');
 setStartDate('');
 setEndDate('');
 setSelectedMonth('');
 };

const percentage = ((budget - min) / (max - min)) * 100;

 return (
 <div className="customizeContainer">
 <div className="customizeContainerTwo">
 <div className="head">
  <h1>Customize Your Perfect Tour</h1>
 </div>

 <div className="budget-container">
 <h1>Budget</h1>
 <div className="slider-wrapper">
 <input
   type="range"
   min={min}
   max={max}
   value={budget}
   onChange={handleSliderChange}
   className="custom-range-slider"
   style={{ "--fill-percent": `${percentage}%` }}
  />
  <span className="range-limit">
   {budget === DEFAULT_VALUE && `${min}-${max} azn`}
   {budget !== DEFAULT_VALUE && `${budget} azn`}
  </span>
 </div>
 <p className="price-info">Choose your price range</p>
<VocationTypesSection />
              <div className="tour-filters-section">
                  <div className="filter-group-row">
                      
                      <div className="filter-column">
                          <h4 className="filter-header">Number of Travels</h4>
                          <select className="custom-select" defaultValue="Adults">
                              <option>Adults</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                          </select>
                          <select className="custom-select" defaultValue="Children">
                              <option>Children</option>
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                          </select>
                      </div>

                      <div className="filter-column">
                          <h4 className="filter-header">Comfort Level</h4>
                          <div className="comfort-options">
                              <label className="custom-radio-label">
                                  <input 
                                      type="radio" 
                                      name="comfort" 
                                      value="Economy" 
                                      checked={comfort === 'Economy'}
                                      onChange={() => setComfort('Economy')}
                                      className="custom-radio-input"
                                  />
                                  Economy
                              </label>
                              <label className="custom-radio-label">
                                  <input 
                                      type="radio" 
                                      name="comfort" 
                                      value="Standart" 
                                      checked={comfort === 'Standart'}
                                      onChange={() => setComfort('Standart')}
                                      className="custom-radio-input"
                                  />
                                  Standart
                              </label>
                              <label className="custom-radio-label">
                                  <input 
                                      type="radio" 
                                      name="comfort" 
                                      value="Premium" 
                                      checked={comfort === 'Premium'}
                                      onChange={() => setComfort('Premium')}
                                      className="custom-radio-input"
                                  />
                                  Premium
                              </label>
                          </div>
                      </div>

                      <div className="filter-column">
                          <h4 className="filter-header">Date</h4>
                          <div className="date-inputs">
                              <input 
                                  type="text" 
                                  placeholder="Start date" 
                                  className="custom-date-input date-half"
                                  onFocus={(e) => e.currentTarget.type = 'date'}
                                  onBlur={(e) => e.currentTarget.type = 'text'}
                                  value={startDate}
                                  onChange={(e) => setStartDate(e.target.value)}
                              />
                              <input 
                                  type="text" 
                                  placeholder="End date" 
                                  className="custom-date-input date-half"
                                  onFocus={(e) => e.currentTarget.type = 'date'}
                                  onBlur={(e) => e.currentTarget.type = 'text'}
                                  value={endDate}
                                  onChange={(e) => setEndDate(e.target.value)}
                              />
                          </div>
                          <select 
                            className="custom-select" 
                            value={selectedMonth} 
                            onChange={(e) => setSelectedMonth(e.target.value)}
                          >
                              <option value="" disabled>Select month</option>
                              <option value="Jan">January</option>
                              <option value="Feb">February</option>
                            
                          </select>
                      </div>

                  </div>
                  
                  <div className="filter-buttons">
                      <button className="show-tour-btn" onClick={handleShowTour}>Show Tour</button>
                      <button className="reset-filters-btn" onClick={handleResetFilters}>Reset Filters</button>
                  </div>
              </div>
              

 </div>
</div>
</div>
 );
};

export default CustomizeTour;