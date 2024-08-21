// src/SafetySection.js
import React from 'react';
import './SafetyCommitment.css';

const SafetySection = () => {
  return (
    <div className="safety-section" id='about'>
      <h2>Your Safety, Our Commitment</h2>
      <div className="safety-buttons">
        <div className="safety-button"> Professional Trainer</div>
        <div className="safety-button"> Certified Equipment</div>
        <div className="safety-button"> Assured Insurance</div>
      </div>
      <div className="story-section">
        <h3>The Story of Us</h3>
        <p>
          Founded in 2020 by a group of friends who love to travel, Adventure Buddy has grown from a small startup to a global community of explorers. Our mission has always been to provide affordable and sustainable adventure experience for students and we continue towards that goal every day.
        </p>
      </div>
    </div>
  );
};

export default SafetySection;
