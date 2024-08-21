import React, { useEffect, useState } from 'react';
import './Header.css';
import image1 from '../../assets/h1.JPG';
import image2 from '../../assets/f2.JPG'
import image3 from '../../assets/f3.JPG'
import image4 from '../../assets/F1.JPG'

const images = [image1,image2,image3,image4];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <img src={images[currentImageIndex]} alt="Adventure" className="header-image" />
      <div className="header-text">
        {/* <h1>Unforgettable Adventures For Students</h1> */}
      </div>
    </div>
  );
};

export default Header;
