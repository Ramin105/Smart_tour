import React from "react";
import "./header.css";
import { FiMessageCircle } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="left">
          <div className="logo">
            <img src="../../src/assets/logo.png" alt="" />
          </div>
          <div className="findInput">
            <FaSearch size={17} color="#154784" />
            <input
              style={{ width: "100%", border: "0px", outline: "0" }}
              type="text"
              placeholder="Find places and things to do"
            />
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <FiMessageCircle size={30} />
            <p>Ask AI</p>
          </div>
          <div className="icon">
            <FiMessageCircle size={30} />
            <p>Wishlist</p>
          </div>
          <div className="icon">
            <FiMessageCircle size={30} />
            <p>Cart</p>
          </div>
          <div className="icon">
            <FiMessageCircle size={30} />
            <p>Bookings</p>
          </div>
          <div className="icon">
            <FiMessageCircle size={30} />
            <p>EN/USD</p>
          </div>
          <div className="icon">
            <FiMessageCircle size={30} />
            <p>Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
