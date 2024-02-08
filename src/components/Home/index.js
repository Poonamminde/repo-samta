import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Index = () => {
  return (
    <div class="home-container">
      <Link to="/countdowntimer">
        <button class="home-button">Count Down Timer</button>
      </Link>
      <Link to="/userinfo">
        <button class="home-button">User Information</button>
      </Link>
    </div>
  );
};

export default Index;
