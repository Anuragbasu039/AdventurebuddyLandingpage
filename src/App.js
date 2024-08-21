// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import SafetyCommitment from './components/Safety/SafetyCommitment';
import Founder from './components/Founder/Founder';
import Weoffer from './components/Offer/We offer';
import './App.css';
// import BrandSlider from './components/BrandSlider/BrandSlider';
import Count from './components/Count/Count'
import Testimonial from './components/Teastimonial/Testimonial'
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery'

function App() {
  return (
    <>

      <Navbar />
      <Header />
      <Features />
      <SafetyCommitment />
      <Founder />
      <Weoffer />
      <Count />
      {/*<BrandSlider />*/}
      <Gallery/>
      <Testimonial/>
      <Footer/>

    </>

  );
}

export default App;
