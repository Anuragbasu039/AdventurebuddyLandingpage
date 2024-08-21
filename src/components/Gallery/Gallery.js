import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';
import image1 from '../../assets/F1.JPG'
import image2 from '../../assets/f2.JPG'
import image3 from '../../assets/f3.JPG'
import image4 from '../../assets/F1.JPG'
import image5 from '../../assets/f2.JPG'
import image6 from '../../assets/f3.JPG'

const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const brands = [
    { logo: image1 },
    { logo: image2 },
    { logo: image3 },
    { logo: image4 },
    { logo: image5 },
    { logo: image6 },
    { logo: image4 },
    { logo: image3 },
  ];

  return (
    <div className="Gallery-slider" id='gallery'>
        <h1>Gallery</h1>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="Gallery-slide">
            <img src={brand.logo} alt={`Brand ${index}`} className="Gallery-logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandSlider;
