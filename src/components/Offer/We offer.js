// src/Activities.js

import React from 'react';
import './We offer.css';
import image1 from '../../assets/hiking.jpg'
import image2 from '../../assets/Rope Climbing.jpg'
import image3 from '../../assets/f2.JPG'
import image4 from '../../assets/tug of war.jpg'
import image5 from '../../assets/F1.JPG'
import image6 from '../../assets/obstacle.jpg'

const activities = [
  {
    title: 'Hiking',
    description: 'Discover nature\'s beauty and enjoy guided scenic trail hikes.',
    image: image1,
  },
  {
    title: 'Rope Climbing',
    description: 'Reach new heights and build confidence with rope climbing.',
    image: image2,
  },
  {
    title: 'Shooting',
    description: 'Improve focus and precision through supervised shooting practice sessions.',
    image: image3,
  },
  {
    title: 'Tug of War',
    description: 'Experience teamwork and camaraderie in exciting tug of war.',
    image: image4,
  },
  {
    title: 'Archery',
    description: 'Hone your aim and concentration with engaging archery sessions.',
    image: image5,
  },
  {
    title: 'Obstacle Course',
    description: 'Challenge your agility and endurance on our obstacle course.',
    image: image6,
  },
];

const Activities = () => {
  return (
    <>
    <div className="activities-container" id='offer'>
      <h1>We Offer</h1>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <img src={activity.image} alt={activity.title} />
            <h2>{activity.title}</h2>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
      {/* <button className="see-more">See more</button> */}
    </div>
    </>
  );
};

export default Activities;
