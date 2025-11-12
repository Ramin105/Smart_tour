import React, { useState } from "react";
import "./profil.css"; 
import sevda from "../../assets/sevda.jpg";
 

const EditableField = ({ label, initialValue, isPassword = false, onSave }) => {
 
  const [isEditing, setIsEditing] = useState(false);  
  const [value, setValue] = useState(initialValue);  

  const displayValue = isPassword ? "••••••••" : value || "Not provided";  

  const buttonText = value ? "Edit" : "Add";

  const handleSave = () => { 
    setIsEditing(false);
    if (onSave) onSave(value);
  };

  const handleEditClick = () => {
    if (isEditing) {
      handleSave();
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="profilPage-info-row">
            <span className="profilPage-info-label">{label}</span>     {" "}
      <div className="profilPage-info-value-container">
               {" "}
        {isEditing ? (
          <input
            type={isPassword ? "password" : "text"}
            value={isPassword ? "••••••••" : value}
            onChange={(e) =>
              setValue(e.target.value === "••••••••" ? value : e.target.value)
            }
            className="profilPage-edit-input"
            autoFocus
          />
        ) : (
          <span className="profilPage-info-value">{displayValue}</span>
        )}
               {" "}
        <button
          className={`profilPage-action-button ${
            isEditing ? "save" : buttonText.toLowerCase()
          }`}
          onClick={handleEditClick}
        >
                    {isEditing ? "Save" : buttonText}       {" "}
        </button>
             {" "}
      </div>
         {" "}
    </div>
  );
}; 

const HistoryTourCard = ({ image, title, dates, rating, reviews }) => (
  <div className="profilPage-history-tour-card">
       {" "}
    <div className="profilPage-card-image-container">
            <img src={image} alt={title} className="profilPage-card-image" />   {" "}
    </div>
       {" "}
    <div className="profilPage-card-content">
            <h4 className="profilPage-card-title">{title}</h4>     {" "}
      <p className="profilPage-card-dates">{dates}</p>     {" "}
      <div className="profilPage-card-rating-info">
                <span className="profilPage-rating-star">★</span> {rating} |{" "}
        {reviews} reviews      {" "}
      </div>
           {" "}
      <div className="profilPage-card-actions">
               {" "}
        <button className="profilPage-view-details-button">View details</button>
               {" "}
        <button className="profilPage-add-comment-button">Add comment</button> 
           {" "}
      </div>
         {" "}
    </div>
     {" "}
  </div>
);
 

const SavedFiltersContent = () => {
  const favoritesData = [
    {
      icon: "🏕️",
      name: "Mountain Camp",
      location: "Quba Park",
      type: "location",
    },
    {
      icon: "🏕️",
      name: "Mountain Camp",
      location: "Quba Park",
      type: "location",
    },
    {
      icon: "🗺️",
      name: "Historic Downtown",
      location: "Quba Park",
      type: "location",
    },
    {
      icon: "🧺",
      name: "Lakeside Picnic",
      location: "Quba Park",
      type: "location",
    },
  ];

  const filtersData = [
    { name: "1 - day tours < 30 azn", type: "filter" },
    { name: "Mountain trips (3 days)", type: "filter" },
  ];

  const FilterFavoriteItem = ({ icon, name, location, type }) => (
    <div className={`profilPage-filter-favorite-item ${type}`}>
           {" "}
      <div className="profilPage-item-details">
               {" "}
        {icon && <span className={`profilPage-item-icon ${type}`}>{icon}</span>}
               {" "}
        <div className="profilPage-item-text">
                    <h4 className="profilPage-item-name">{name}</h4>         {" "}
          {location && <p className="profilPage-item-location">{location}</p>} 
               {" "}
        </div>
             {" "}
      </div>
           {" "}
      <div className="profilPage-item-actions">
               {" "}
        <button className="profilPage-action-button edit-small">
                   {" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"
              stroke="#6c757d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
                 {" "}
        </button>
               {" "}
        <button className="profilPage-action-button delete-small">
                   {" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="#dc3545"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
                 {" "}
        </button>
         
      </div>
          
    </div>
  );

  return (
    <> 
      <section className="profilPage-favorites-section">
                <h2 className="profilPage-section-title-alt">Favorites</h2>     
         {" "}
        <div className="profilPage-favorites-list">
                   {" "}
          {favoritesData.map((item, index) => (
            <FilterFavoriteItem key={`fav-${index}`} {...item} />
          ))}
                 {" "}
        </div>
             {" "}
      </section> 
      <section className="profilPage-filters-section">
                <h2 className="profilPage-section-title-alt">Filters</h2>       {" "}
        <div className="profilPage-filters-list">
                   {" "}
          {filtersData.map((item, index) => (
            <FilterFavoriteItem key={`filt-${index}`} {...item} />
          ))}
                 {" "}
        </div>
             {" "}
      </section>
         {" "}
    </>
  );
};

 
const NavItem = ({ icon, label, isActive, onClick }) => (
  <div
    className={`profilPage-nav-item ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
              <span className="profilPage-nav-icon">{icon}</span>         {" "}
    <span className="profilPage-nav-label">{label}</span>     {" "}
  </div>
);

const Profil = () => {
   
  const [activeContent, setActiveContent] = useState("personal");  

  const [userInfo, setUserInfo] = useState({
    fullName: "Aygun Ismayilova",
    phone: "",
    dob: "",
    email: "example@gmail.com",
    password: "password123",
  });  

  const tourHistoryData = [
    {
      title: "A harmony of nature",
      dates: "2 days / 1 night | 02.09.2025 - 03.09.2025",
      rating: 4.5,
      reviews: 40,
      image: sevda,
    },
    {
      title: "Private Sheki Tour",
      dates: "2 days / 1 night | 12.09.2025 - 13.09.2025",
      rating: 4.5,
      reviews: 47,
      image: sevda,
    },
  ];
  const allHistoryCards = [...tourHistoryData, ...tourHistoryData]; // Personal Information Məzmunu

  const PersonalInfoContent = () => (
    <>
           {" "}
      <section className="profilPage-personal-info-section">
               {" "}
        <h2 className="profilPage-section-title">Personal information</h2>
               {" "}
        <EditableField
          label="Full name"
          initialValue={userInfo.fullName}
          onSave={(val) => setUserInfo({ ...userInfo, fullName: val })}
        />
               {" "}
        <EditableField
          label="Phone number"
          initialValue={userInfo.phone}
          onSave={(val) => setUserInfo({ ...userInfo, phone: val })}
        />
               {" "}
        <EditableField
          label="Date of birth"
          initialValue={userInfo.dob}
          onSave={(val) => setUserInfo({ ...userInfo, dob: val })}
        />
             {" "}
      </section>
           {" "}
      <section className="profilPage-security-section">
                <h2 className="profilPage-section-title">Account Security</h2>
               {" "}
        <EditableField
          label="Email"
          initialValue={userInfo.email}
          onSave={(val) => setUserInfo({ ...userInfo, email: val })}
        />
               {" "}
        <EditableField
          label="Password"
          initialValue={userInfo.password}
          isPassword={true}
          onSave={(val) => setUserInfo({ ...userInfo, password: val })}
        />
               {" "}
        <div className="profilPage-info-row profilPage-switch-row">
                   {" "}
          <span className="profilPage-info-label">2-step verifications</span>   
               {" "}
          <div className="profilPage-info-value-container">
                       {" "}
            <span className="profilPage-switch-description">
                            Add an additional layer of security to your account
              during login.            {" "}
            </span>
                       {" "}
            <label className="profilPage-custom-switch">
                            <input type="checkbox" />             {" "}
              <span className="profilPage-slider profilPage-round"></span>     
                   {" "}
            </label>
                     {" "}
          </div>
                 {" "}
        </div>
             {" "}
      </section>
           {" "}
      <section className="profilPage-support-access-section">
                <h2 className="profilPage-section-title">Support access</h2>   
           {" "}
        <div className="profilPage-info-row profilPage-switch-row">
                   {" "}
          <span className="profilPage-info-label">Support access</span>         {" "}
          <div className="profilPage-info-value-container">
                       {" "}
            <span className="profilPage-switch-description">
                            You have granted access to your account for support
              purposes until               Aug 20, 2025, 12:20 AM.            {" "}
            </span>
                       {" "}
            <label className="profilPage-custom-switch active">
                            <input type="checkbox" defaultChecked />           
                <span className="profilPage-slider profilPage-round"></span>   
                     {" "}
            </label>
                     {" "}
          </div>
                 {" "}
        </div>
               {" "}
        <div className="profilPage-action-row">
                   {" "}
          <div className="profilPage-action-details">
                       {" "}
            <h4 className="profilPage-action-label">Log out of all devices</h4> 
                     {" "}
            <p className="profilPage-action-description">
                            Log out of all other active sessions on other
              devices besides this               one.            {" "}
            </p>
                     {" "}
          </div>
                   {" "}
          <button className="profilPage-log-out-button">Log out</button>       {" "}
        </div>
               {" "}
        <div className="profilPage-action-row profilPage-delete-row">
                   {" "}
          <div className="profilPage-action-details">
                       {" "}
            <h4 className="profilPage-action-label">Delete my account</h4>     
                 {" "}
            <p className="profilPage-action-description">
                            Permanently delete the account and remove access
              from all               workspaces.            {" "}
            </p>
                     {" "}
          </div>
                    <button className="profilPage-delete-button">Delete</button>
                 {" "}
        </div>
             {" "}
      </section>
         {" "}
    </>
  );  

  const TourHistoryContent = () => (
    <>
            <h2 className="profilPage-section-title">Tour history</h2>     {" "}
      <main className="profilPage-tour-history-grid">
               {" "}
        {allHistoryCards.map((tour, index) => (
          <HistoryTourCard key={index} {...tour} image={sevda} />
        ))}
             {" "}
      </main>
         {" "}
    </>
  );  

  const renderContent = () => {
    switch (activeContent) {
      case "personal":
        return <PersonalInfoContent />;
      case "history":
        return <TourHistoryContent />;
      case "saved":
        return <SavedFiltersContent />;
      default:
        return <PersonalInfoContent />;
    }
  };

  return (
    <div className="user-profile-page-container">
           {" "}
      <div className="profilPage-profile-layout">
               {" "}
        <div className="profilPage-profile-sidebar">
                   {" "}
          <div className="profilPage-sidebar-header">
                       {" "}
            <img src={sevda} alt="Aygün" className="profilPage-user-avatar" /> 
                      <h2>Hello, Aygun!</h2>         {" "}
          </div>
                   {" "}
          <nav className="profilPage-profile-nav">
                       {" "}
            <NavItem
              icon="👤"
              label="Personal information"
              isActive={activeContent === "personal"}
              onClick={() => setActiveContent("personal")}
            />
                       {" "}
            <NavItem
              icon="🕰️"
              label="Tour history"
              isActive={activeContent === "history"}
              onClick={() => setActiveContent("history")}
            />
                       {" "}
            <NavItem
              icon="🔒"
              label="Saved Filters & Favorites"
              isActive={activeContent === "saved"}
              onClick={() => setActiveContent("saved")}
            />
                       {" "}
            <NavItem
              icon="💳"
              label="Payment methods"
              isActive={false}
              onClick={() => setActiveContent("payment")}
            />
                       {" "}
            <NavItem
              icon="🔔"
              label="Notification settings"
              isActive={false}
              onClick={() => setActiveContent("notifications")}
            />
                     {" "}
          </nav>
                 {" "}
        </div> 
        <div
          className={`profilPage-profile-content ${
            activeContent !== "personal" ? "profilPage-history-active" : ""
          }`}
        >
                    {renderContent()}       {" "}
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default Profil;
