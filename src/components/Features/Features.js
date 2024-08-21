// src/components/Features.js
import React from 'react';
import './Features.css';
import F1 from "../../assets/F1.JPG"
import F2 from "../../assets/f2.JPG"
import F3 from "../../assets/f3.JPG"
const Features = () => {
  return (
    <div className="features">
      <h2>What We Are Offering ?</h2>
      <div className="features-container">
        <div className="feature">
          <img src={F1} alt="School Activities" />
          <h3>School Camps</h3>
          <p>Our school activities ignite curiosity, teamwork, and a passion for adventure.</p>
        </div>
        <div className="feature">
          <img src={F2} alt="Outdoor Activities" />
          <h3>Outdoor Camps</h3>
          <p>Our outdoor activities offer thrilling experiences and unforgettable nature connections.</p>
        </div>
        <div className="feature">
          <img src={F3} alt="Adventure Activities" />
          <h3>Adventure Activities</h3>
          <p>Our adventure activities provide excitement, challenge, and unforgettable memories outdoors.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
